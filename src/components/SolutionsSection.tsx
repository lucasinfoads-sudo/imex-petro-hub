import { Truck, Pill, Headphones, BarChart3, Route } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Truck,
      title: "Coleta e entrega expressa",
      description: "Agilidade e controle digital em cada etapa.",
    },
    {
      icon: Pill,
      title: "Transporte de medicamentos e documentos",
      description: "Cuidado e rastreabilidade total em entregas sensíveis.",
    },
    {
      icon: Headphones,
      title: "Suporte direto com a equipe",
      description: "Comunicação fácil e resolução rápida quando você precisar.",
    },
    {
      icon: BarChart3,
      title: "Relatórios mensais",
      description: "Transparência real sobre performance e prazos.",
    },
    {
      icon: Route,
      title: "Planejamento logístico personalizado",
      description: "Crescimento previsível e organizado para seu negócio.",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que você recebe ao ter a Ganhe Tempo{" "}
            <span className="text-primary">como parceira.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-elegant transition-smooth bg-white"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            Entregar mais rápido é bom.{" "}
            <span className="text-primary">Entregar com inteligência é melhor.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
