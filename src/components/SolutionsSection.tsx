import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      id: "mobile",
      label: "xpert smart mobile",
      title: "xpert smart mobile: gerencie o seu posto de qualquer lugar",
      description:
        "O aplicativo xpert smart mobile foi pensado para você ter todas as funcionalidades para otimizar seu posto de combustível e loja de convivência de onde você estiver, direto pelo seu celular.",
    },
    {
      id: "cash",
      label: "xpert smart cash",
      title: "xpert smart cash: controle de caixa inteligente",
      description:
        "Gerencie o fluxo de caixa do seu posto com precisão e segurança.",
    },
    {
      id: "pay",
      label: "xpert smart pay",
      title: "xpert smart pay: pagamentos modernos",
      description:
        "Aceite todas as formas de pagamento de forma integrada e segura.",
    },
    {
      id: "business",
      label: "xpert smart business",
      title: "xpert smart business: inteligência de negócio",
      description:
        "Análises e relatórios completos para tomada de decisões estratégicas.",
    },
    {
      id: "checkout",
      label: "xpert smart checkout",
      title: "xpert smart checkout: vendas rápidas",
      description:
        "Agilize o atendimento na loja de conveniência com nosso PDV moderno.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Totalmente dedicado <span className="text-primary">às necessidades do seu segmento</span>
        </h2>

        <Tabs defaultValue="mobile" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto gap-2 bg-transparent">
            {solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {solution.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold">
                    CONHECER A SOLUÇÃO
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12 flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-primary" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsSection;
