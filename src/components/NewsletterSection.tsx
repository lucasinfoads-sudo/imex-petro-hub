import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Building2, Mail, Phone, Briefcase } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { clientLeadSchema, sanitizeInput } from "@/lib/validations";

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    phone: "",
    business_type: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        company_name: sanitizeInput(formData.company_name),
        email: sanitizeInput(formData.email.toLowerCase()),
        phone: sanitizeInput(formData.phone),
        business_type: sanitizeInput(formData.business_type),
      };

      // Validate with Zod
      const validatedData = clientLeadSchema.parse(sanitizedData);

      const { error } = await supabase.from("client_leads").insert({
        company_name: validatedData.company_name,
        email: validatedData.email,
        phone: validatedData.phone,
        business_type: validatedData.business_type,
      });

      if (error) throw error;

      toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        company_name: "",
        email: "",
        phone: "",
        business_type: "",
      });
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        // Zod validation errors
        toast.error(error.errors[0]?.message || "Dados inválidos");
      } else {
        console.error("Erro ao enviar solicitação:", error);
        toast.error("Erro ao enviar solicitação. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-16 bg-primary text-primary-foreground">
      <div id="newsletter" className="absolute -top-20"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto pra simplificar sua{" "}
            <span className="text-accent">logística?</span>
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Solicite seu diagnóstico gratuito e descubra como podemos elevar suas entregas ao próximo nível
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Nome da Empresa"
                  className="pl-10 h-12 bg-white"
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData({ ...formData, company_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="E-mail corporativo"
                  className="pl-10 h-12 bg-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="pl-10 h-12 bg-white"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Select
                  value={formData.business_type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, business_type: value })
                  }
                  required
                >
                  <SelectTrigger className="pl-10 h-12 bg-white">
                    <SelectValue placeholder="Tipo de Negócio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmacia">Farmácia</SelectItem>
                    <SelectItem value="clinica">Clínica</SelectItem>
                    <SelectItem value="escritorio">Escritório</SelectItem>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-elegant hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-smooth mt-4"
              disabled={loading}
            >
              {loading ? "ENVIANDO..." : "SOLICITAR DIAGNÓSTICO GRATUITO"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
