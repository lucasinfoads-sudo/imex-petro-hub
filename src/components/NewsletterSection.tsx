import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterSection = () => {
  return (
    <section id="contato" className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💬 Pronto pra simplificar sua{" "}
            <span className="text-primary">logística?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Solicite seu diagnóstico gratuito e descubra como podemos elevar suas entregas ao próximo nível
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Nome da Empresa"
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="E-mail corporativo"
              className="flex-1"
            />
            <Input
              type="tel"
              placeholder="Telefone"
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8">
              SOLICITAR DIAGNÓSTICO
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
