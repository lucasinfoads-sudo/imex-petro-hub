import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import logoGanheTempo from "@/assets/logo-ganhe-tempo.jpg";
import { adminLoginSchema, sanitizeInput } from "@/lib/validations";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sanitize and validate inputs
      const sanitizedData = {
        email: sanitizeInput(email.toLowerCase()),
        password: password, // Don't sanitize password (could remove valid special chars)
      };

      const validatedData = adminLoginSchema.parse(sanitizedData);

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      });

      if (authError) {
        // Don't expose detailed error messages to prevent enumeration attacks
        throw new Error("E-mail ou senha incorretos");
      }

      if (authData.user) {
        // Verificar se usuário é admin
        const { data: roleData, error: roleError } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", authData.user.id)
          .eq("role", "admin")
          .maybeSingle();

        if (roleError) {
          await supabase.auth.signOut();
          throw new Error("Erro ao verificar permissões");
        }

        if (roleData) {
          toast.success("Login realizado com sucesso!");
          navigate("/admin");
        } else {
          await supabase.auth.signOut();
          toast.error("Acesso negado. Apenas administradores podem fazer login.");
        }
      }
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        // Zod validation errors
        toast.error("Dados inválidos");
      } else {
        toast.error(error.message || "Erro ao fazer login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-accent flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logoGanheTempo} alt="Ganhe Tempo" className="h-16" />
          </div>
          <CardTitle className="text-2xl">Acesso Administrativo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ganhetempo.com.br"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
