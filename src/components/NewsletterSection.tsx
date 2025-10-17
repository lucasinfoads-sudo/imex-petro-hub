import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Assine a nossa <span className="text-primary">newsletter!</span>
          </h2>
          <form className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Nome"
              className="flex-1"
            />
            <Input
              type="email"
              placeholder="E-mail"
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8">
              SE INSCREVER
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
