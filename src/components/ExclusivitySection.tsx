const ExclusivitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            💼 Não atendemos todo mundo.{" "}
            <span className="text-accent">Atendemos quem valoriza o tempo.</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-6 text-primary-foreground/90">
            A Ganhe Tempo é parceira de empresas que entendem que cada entrega é uma extensão da marca.
            Aqui, cada contrato é uma parceria — com acompanhamento, previsibilidade e responsabilidade.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <p className="text-xl md:text-2xl font-bold">
              Se sua empresa precisa de agilidade, confiança e controle total,
              <br />
              <span className="text-accent">você está no lugar certo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
