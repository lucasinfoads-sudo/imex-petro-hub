import { Settings, Radio, Users, Headphones, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Operação personalizada",
      description: "Cada empresa tem sua rotina — nós ajustamos tudo a ela.",
    },
    {
      icon: Radio,
      title: "Central de controle ativa",
      description: "Monitoramento constante e respostas imediatas.",
    },
    {
      icon: Users,
      title: "Gestão próxima dos entregadores",
      description: "Profissionais acompanhados, uniformizados e orientados.",
    },
    {
      icon: Headphones,
      title: "Atendimento humano e resolutivo",
      description: "Nada de robôs; quem liga fala com quem resolve.",
    },
    {
      icon: TrendingUp,
      title: "Expansão planejada",
      description: "Crescimento consistente, com o mesmo padrão em cada cidade.",
    },
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que faz a Ganhe Tempo <span className="text-primary">diferente.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-elegant transition-smooth border-primary/10 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
