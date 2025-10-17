import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

const OfferSection = () => {
  const benefits = [
    "Análise completa de rotas e volume",
    "Solução personalizada sob medida",
    "Preços transparentes sem taxas ocultas",
    "Melhoria de eficiência mensurável",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              💡 Transforme sua logística em{" "}
              <span className="text-primary">vantagem competitiva.</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-lg mb-6">
                🎁 DIAGNÓSTICO GRATUITO
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Na Ganhe Tempo, cada parceria começa com um diagnóstico gratuito.
                Analisamos rotas, volume e necessidades pra montar uma solução sob medida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 mb-8">
              <p className="text-center text-lg font-bold text-foreground">
                Você sabe exatamente o que contrata, o que recebe e o que melhora —{" "}
                <span className="text-primary">sem taxas ocultas, sem surpresas.</span>
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-12 py-6 text-lg shadow-elegant"
              >
                SOLICITAR DIAGNÓSTICO GRATUITO
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                📈 Transparência e resultado: é isso que move a gente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
