import { Button } from "./ui/button";
import heroImage from "@/assets/hero-delivery-new.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 bottom-0 w-3/4 bg-gradient-to-l from-accent/20 to-transparent transform skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              E se o problema não for a entrega...
              <br />
              <span className="text-accent">mas a forma como sua logística foi pensada?</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              A Ganhe Tempo Logística nasceu pra ser a extensão do seu negócio — unindo velocidade, segurança e inteligência operacional pra que cada entrega gere resultado, reputação e crescimento.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-elegant"
            >
              FALE COM A GENTE
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Entregador Ganhe Tempo com uniforme verde realizando entrega profissional"
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
