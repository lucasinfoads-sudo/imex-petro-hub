import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Users, Bike } from "lucide-react";

interface ClientLead {
  id: string;
  company_name: string;
  email: string;
  phone: string;
  business_type: string;
  created_at: string;
}

interface DeliveryApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  cnh_category: string;
  has_motorcycle: boolean;
  previous_experience: string | null;
  created_at: string;
}

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [clientLeads, setClientLeads] = useState<ClientLead[]>([]);
  const [deliveryApps, setDeliveryApps] = useState<DeliveryApplication[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      // Verificar se é admin
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        toast.error("Acesso negado");
        await supabase.auth.signOut();
        navigate("/");
        return;
      }

      // Carregar dados
      await loadData();
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      navigate("/auth");
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [clientsRes, deliveryRes] = await Promise.all([
        supabase.from("client_leads").select("*").order("created_at", { ascending: false }),
        supabase.from("delivery_applications").select("*").order("created_at", { ascending: false }),
      ]);

      if (clientsRes.data) setClientLeads(clientsRes.data);
      if (deliveryRes.data) setDeliveryApps(deliveryRes.data);
    } catch (error) {
      toast.error("Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    toast.success("Logout realizado com sucesso");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-light flex items-center justify-center">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-light">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Painel Administrativo</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-primary-foreground border-primary-foreground hover:bg-primary-dark"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="clients">
              <Users className="mr-2 h-4 w-4" />
              Clientes ({clientLeads.length})
            </TabsTrigger>
            <TabsTrigger value="delivery">
              <Bike className="mr-2 h-4 w-4" />
              Entregadores ({deliveryApps.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>Solicitações de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Empresa</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Tipo de Negócio</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clientLeads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell className="font-medium">{lead.company_name}</TableCell>
                          <TableCell>{lead.email}</TableCell>
                          <TableCell>{lead.phone}</TableCell>
                          <TableCell className="capitalize">{lead.business_type}</TableCell>
                          <TableCell>{formatDate(lead.created_at)}</TableCell>
                        </TableRow>
                      ))}
                      {clientLeads.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground">
                            Nenhuma solicitação de cliente ainda
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="delivery">
            <Card>
              <CardHeader>
                <CardTitle>Candidaturas de Entregadores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>E-mail</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>CNH</TableHead>
                        <TableHead>Moto Própria</TableHead>
                        <TableHead>Experiência</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deliveryApps.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.full_name}</TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>{app.phone}</TableCell>
                          <TableCell>{app.cnh_category}</TableCell>
                          <TableCell>{app.has_motorcycle ? "Sim" : "Não"}</TableCell>
                          <TableCell>{app.previous_experience || "N/A"}</TableCell>
                          <TableCell>{formatDate(app.created_at)}</TableCell>
                        </TableRow>
                      ))}
                      {deliveryApps.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center text-muted-foreground">
                            Nenhuma candidatura de entregador ainda
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
