import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Autoridade total",
      description: "Focados apenas no segmento de postos de combustíveis.",
    },
    {
      title: "Flexível e multibandeira",
      description: "Homologado nas principais bandeiras de postos.",
    },
    {
      title: "100% seguro",
      description: "Antecipamos todas as exigências legais e fiscais em todo o Brasil.",
    },
    {
      title: "Contrato sem cláusula de fidelidade",
      description: "Porque é essa a confiança que temos com a nossa solução.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Não é à toa que somos o{" "}
          <span className="text-primary">maior sistema para posto de combustível</span> do mercado
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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
