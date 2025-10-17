import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Fuel, DollarSign, Package, TrendingUp, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Fuel,
      title: "Gestão de ponta a ponta do posto de combustível",
      description:
        "Administre com inteligência todas as operações do seu posto. Acompanhe todas as informações da loja e posto, com análise e relatórios integrados.",
    },
    {
      icon: DollarSign,
      title: "Administrativo e financeiro",
      description:
        "Processos organizados e otimizados de forma eficiente. Disponibilize todos os dados e agilize processos de cobranças e pagamento.",
    },
    {
      icon: Package,
      title: "PDV para postos de gasolina",
      description:
        "Agilidade para atender bem os clientes. Oferece ao cliente facilidade na hora de efetuar o pagamento de combustível e na loja de conveniência.",
    },
    {
      icon: TrendingUp,
      title: "Estoque de postos de combustíveis",
      description:
        "Maximize preços e margens. Cadastre preços atualizados e informações dos produtos. Mantenha organizado e atualizado.",
    },
    {
      icon: Users,
      title: "Controle e fiscal em gestão de postos",
      description:
        "Simplifique rotinas contábeis e fiscais. Controle a emissão de notas fiscais e gerencie notas fiscais de entrada e saída.",
    },
  ];

  return (
    <section className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O sistema para postos e conveniências da xpert
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          já é a principal escolha do mercado
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elegant transition-smooth border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
