import { Shield, CheckCircle2, Radio } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      text: "Cada entrega tem dono.",
    },
    {
      icon: CheckCircle2,
      text: "Cada cliente tem atenção.",
    },
    {
      icon: Radio,
      text: "Cada compromisso tem palavra.",
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              🛡️ Entregas seguras, <span className="text-primary">resultados garantidos.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Confiar em uma logística é confiar em quem carrega seu nome.
              Por isso, seguimos padrões rígidos de segurança, rastreamento e comunicação contínua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:shadow-elegant transition-smooth bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-lg font-bold text-foreground">{guarantee.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
