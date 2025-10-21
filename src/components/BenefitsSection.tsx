import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Operação personalizada",
      description: "Cada empresa tem sua rotina — nós ajustamos tudo a ela.",
    },
    {
      title: "Central de controle ativa",
      description: "Monitoramento constante e respostas imediatas.",
    },
    {
      title: "Gestão próxima",
      description: "Profissionais acompanhados, uniformizados e orientados.",
    },
    {
      title: "Expansão planejada",
      description: "Crescimento consistente com o mesmo padrão em cada cidade.",
    },
    {
      title: "Rastreamento e Treinamento de Equipe",
      description: "Tecnologia de rastreamento em tempo real e equipe constantemente capacitada para excelência no atendimento.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que faz a Ganhe Tempo{" "}
          <span className="text-primary">diferente</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8">
            Falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
