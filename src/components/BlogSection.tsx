import { Button } from "./ui/button";
import { ArrowRight, Package, TrendingUp, Route } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      title: "Como otimizar rotas de entrega",
      excerpt: "Estratégias práticas para reduzir tempo e custo em suas operações logísticas.",
      icon: Route,
      date: "15 Mar 2024",
    },
    {
      title: "Logística: além da velocidade",
      excerpt: "Por que confiabilidade é mais importante que rapidez nas entregas estratégicas.",
      icon: TrendingUp,
      date: "10 Mar 2024",
    },
    {
      title: "Gestão de entregas sensíveis",
      excerpt: "Cuidados essenciais no transporte de medicamentos e documentos importantes.",
      icon: Package,
      date: "5 Mar 2024",
    },
  ];

  return (
    <section id="conteudo" className="py-16 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Insights em <span className="text-primary">Logística</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conhecimento que move seu negócio para frente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => {
            const Icon = post.icon;
            return (
              <article
                key={index}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-smooth hover-scale"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                  Ler mais <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver todos os artigos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
