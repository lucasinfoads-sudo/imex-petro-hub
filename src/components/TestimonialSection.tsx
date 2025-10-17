import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-smooth">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-center italic text-muted-foreground mb-6">
                "A gente já trabalha com a xpert há 20 anos. Hoje, eu não me vejo
                trabalhando sem o sistema, é indispensável na operação da nossa rede.
                O que tem de mais inovador em tecnologia, eles estão desenvolvendo,
                tanto na área de abastecimento quanto na retaguarda do posto."
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-lg">Rodrigo Costacurta</p>
                <p className="text-muted-foreground">Rede Treviso</p>
              </div>
            </CardContent>
          </Card>
          <h3 className="text-2xl md:text-3xl font-bold text-center mt-12">
            Quem é nosso cliente comprova:{" "}
            <span className="text-primary">não tem atendimento igual!</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
