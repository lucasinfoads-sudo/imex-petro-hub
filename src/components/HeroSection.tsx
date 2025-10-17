import { Button } from "./ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Diagonal Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 bottom-0 w-3/4 bg-gradient-to-l from-accent/20 to-transparent transform skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Controle total para
              <br />
              <span className="text-accent">gestão da pista</span>, loja de
              <br />
              conveniência e
              <br />
              <span className="text-accent">administração de postos.</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              São mais de 30 anos de mercado atuando com postos de combustíveis e
              conveniência. A xpert tem as melhores ferramentas para gerenciar e
              maximizar seus lucros.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-elegant"
            >
              QUERO SER XPERT
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Profissional utilizando tablet em posto de combustível"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
