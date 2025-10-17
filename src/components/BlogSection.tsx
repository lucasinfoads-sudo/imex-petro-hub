import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BlogSection = () => {
  const posts = [
    {
      title: "xpert e Metanet anunciam fusão estratégica!",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
    },
    {
      title: "Futuro dos postos de combustíveis: como se adaptar às mudanças do mercado",
      image: "https://images.unsplash.com/photo-1545262810-77515befe149?w=400&h=300&fit=crop",
    },
    {
      title: "Principais desafios de um gestor: como superá-los e alcançar resultados",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Os melhores conteúdos,{" "}
          <span className="text-primary">feitos por quem é xpert</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
