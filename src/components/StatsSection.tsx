const StatsSection = () => {
  const stats = [
    { prefix: "+", number: "30", label: "anos de experiência" },
    { prefix: "+", number: "10", unit: "MIL", label: "entregas realizadas" },
    { prefix: "+", number: "15", label: "cidades atendidas em SC" },
    { prefix: "+", number: "200", label: "empresas parceiras" },
  ];

  return (
    <section className="gradient-hero py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-3xl md:text-4xl font-bold">{stat.prefix}</span>
                <span className="text-5xl md:text-6xl font-bold mx-1">{stat.number}</span>
                {stat.unit && (
                  <span className="text-2xl md:text-3xl font-bold">{stat.unit}</span>
                )}
              </div>
              <p className="text-sm md:text-base text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
