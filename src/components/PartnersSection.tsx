import { Button } from "./ui/button";
import { Building2, Pill, Briefcase, Store, Factory } from "lucide-react";

const PartnersSection = () => {
  const segments = [
    { name: "Farmácias", icon: Pill },
    { name: "Clínicas", icon: Building2 },
    { name: "Escritórios", icon: Briefcase },
    { name: "Comércios", icon: Store },
    { name: "Indústrias", icon: Factory },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Segmentos que atendemos com{" "}
          <span className="text-primary">excelência</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 hover-scale"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {segment.name}
                </span>
              </div>
            );
          })}
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

export default PartnersSection;
