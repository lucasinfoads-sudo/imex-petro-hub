import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  prefix: string;
  number: number;
  unit?: string;
  label: string;
}

const StatItem = ({ prefix, number, unit, label }: StatItemProps) => {
  const { count, ref } = useCountUp(number);

  return (
    <div ref={ref} className="text-center text-white">
      <div className="flex items-baseline justify-center mb-2">
        <span className="text-3xl md:text-4xl font-bold">{prefix}</span>
        <span className="text-5xl md:text-6xl font-bold mx-1">{count}</span>
        {unit && (
          <span className="text-2xl md:text-3xl font-bold">{unit}</span>
        )}
      </div>
      <p className="text-sm md:text-base text-white/90">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { prefix: "+", number: 30, label: "anos de experiência" },
    { prefix: "+", number: 30, unit: "MIL", label: "entregas realizadas" },
    { prefix: "+", number: 3, label: "cidades atendidas em SC" },
    { prefix: "+", number: 40, label: "empresas parceiras" },
  ];

  return (
    <section className="gradient-hero py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              prefix={stat.prefix}
              number={stat.number}
              unit={stat.unit}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
