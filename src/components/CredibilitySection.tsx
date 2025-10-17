import { MapPin, TrendingUp } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            📦 Crescemos nas ruas. <span className="text-primary">Expandimos com confiança.</span>
          </h2>
          
          <div className="bg-white rounded-lg shadow-card p-8 md:p-12 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MapPin className="w-12 h-12 text-primary" />
              <TrendingUp className="w-12 h-12 text-accent" />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Com base sólida construída no dia a dia, a Ganhe Tempo Logística se tornou{" "}
              <span className="text-primary font-bold">referência em Itajaí (SC)</span>,
              atendendo empresas de diversos segmentos: farmácias, clínicas, escritórios e comércios.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Hoje, seguimos em expansão por Santa Catarina, mantendo o mesmo padrão que nos tornou referência:
              entregas rápidas, atendimento humano e compromisso com a palavra dada.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-xl font-bold text-foreground">
                💬 Cada nova cidade que atendemos reforça o mesmo propósito:{" "}
                <span className="text-primary">crescer com qualidade, não com pressa.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
