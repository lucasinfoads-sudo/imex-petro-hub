import { Button } from "./ui/button";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          O xpert é homologado nas principais bandeiras de postos do Brasil
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="text-2xl font-bold text-primary">PETROBRAS</div>
          <div className="text-2xl font-bold text-red-600">Shell</div>
          <div className="text-2xl font-bold text-primary">Ipiranga</div>
        </div>
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold">
            Falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
