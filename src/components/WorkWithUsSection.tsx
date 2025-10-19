import { Bike, DollarSign, Calendar, Shield, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";

const WorkWithUsSection = () => {
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
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="(47) 99999-9999" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cnh">CNH categoria</Label>
                    <Select>
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
                    <Select>
                      <SelectTrigger id="motorcycle">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Sim</SelectItem>
                        <SelectItem value="no">Não</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold">
                    <Bike className="mr-2 h-5 w-5" />
                    ENVIAR CANDIDATURA
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
