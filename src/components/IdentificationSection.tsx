import { Clock, Package, MessageSquare } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IdentificationSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Atrasos",
      description: "Entregas que não chegam no prazo comprometem a confiança",
    },
    {
      icon: Package,
      title: "Erros de rota",
      description: "Rotas mal planejadas aumentam custos e frustração",
    },
    {
      icon: MessageSquare,
      title: "Falta de comunicação",
      description: "Não saber onde está sua entrega gera insegurança",
    },
  ];

  const differentials = [
    {
      title: "Roteamento inteligente adaptativo",
      description: "A tecnologia ajusta rotas conforme urgência e prioridade de cada entrega.",
    },
    {
      title: "Sistema de performance logística",
      description: "Dados viram decisões: relatórios reais sobre tempo, custo e eficiência.",
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            💭 Seu cliente só conhece sua marca de verdade{" "}
            <span className="text-primary">no momento da entrega.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-smooth">
                <CardContent className="p-6 text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-destructive" />
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            São detalhes que parecem pequenos, mas destroem a confiança que levou meses pra construir.
            A Ganhe Tempo entende isso — por isso, criou um modelo logístico baseado em{" "}
            <span className="text-primary font-bold">precisão e estratégia.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {differentials.map((differential, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3 text-primary">{differential.title}</h3>
                <p className="text-muted-foreground">{differential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            Enquanto outros tratam logística como custo,
            <br />
            <span className="text-primary">nossos parceiros transformam em vantagem competitiva.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
