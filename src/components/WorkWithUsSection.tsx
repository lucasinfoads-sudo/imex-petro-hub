import { Bike, DollarSign, Calendar, Shield, Smartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { deliveryApplicationSchema, sanitizeInput } from "@/lib/validations";

const WorkWithUsSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    cnh_category: "",
    has_motorcycle: "",
    previous_experience: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        full_name: sanitizeInput(formData.full_name),
        phone: sanitizeInput(formData.phone),
        email: sanitizeInput(formData.email.toLowerCase()),
        cnh_category: sanitizeInput(formData.cnh_category.toLowerCase()),
        has_motorcycle: formData.has_motorcycle,
        previous_experience: formData.previous_experience ? sanitizeInput(formData.previous_experience) : "",
      };

      // Validate with Zod
      const validatedData = deliveryApplicationSchema.parse(sanitizedData);

      const { error } = await supabase.from("delivery_applications").insert([
        {
          full_name: validatedData.full_name,
          phone: validatedData.phone,
          email: validatedData.email,
          cnh_category: validatedData.cnh_category,
          has_motorcycle: validatedData.has_motorcycle === "yes",
          previous_experience: validatedData.previous_experience || null,
        },
      ]);

      if (error) throw error;

      toast.success("Candidatura enviada com sucesso!");
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        cnh_category: "",
        has_motorcycle: "",
        previous_experience: "",
      });
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        // Zod validation errors
        toast.error(error.errors[0]?.message || "Dados inválidos");
      } else {
        console.error("Erro ao enviar candidatura:", error);
        toast.error("Erro ao enviar candidatura. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Remuneração competitiva",
      description: "Ganhos justos pelo seu trabalho",
    },
    {
      icon: Calendar,
      title: "Flexibilidade de horários",
      description: "Organize seu tempo de trabalho",
    },
    {
      icon: Shield,
      title: "Uniformes profissionais",
      description: "Equipamentos fornecidos pela empresa",
    },
    {
      icon: Smartphone,
      title: "Tecnologia e suporte",
      description: "Ferramentas modernas para facilitar seu dia",
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seja um <span className="text-primary">Entregador Ganhe Tempo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Faça parte da nossa equipe de profissionais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Por que trabalhar conosco?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-primary/10">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Cadastre-se agora</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.full_name}
                      onChange={(e) =>
                        setFormData({ ...formData, full_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(47) 99999-9999"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cnh">CNH categoria</Label>
                    <Select
                      value={formData.cnh_category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, cnh_category: value })
                      }
                      required
                    >
                      <SelectTrigger id="cnh">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="ab">AB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="motorcycle">Tem moto própria?</Label>
                    <Select
                      value={formData.has_motorcycle}
                      onValueChange={(value) =>
                        setFormData({ ...formData, has_motorcycle: value })
                      }
                      required
                    >
                      <SelectTrigger id="motorcycle">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Sim</SelectItem>
                        <SelectItem value="no">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Experiência anterior (opcional)</Label>
                    <Textarea
                      id="experience"
                      placeholder="Descreva sua experiência com entregas..."
                      value={formData.previous_experience}
                      onChange={(e) =>
                        setFormData({ ...formData, previous_experience: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold"
                    disabled={loading}
                  >
                    <Bike className="mr-2 h-5 w-5" />
                    {loading ? "ENVIANDO..." : "ENVIAR CANDIDATURA"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
