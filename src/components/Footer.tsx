import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const solutions = [
    "Sistema xpert web",
    "xpert smart mobile",
    "xpert smart cash",
    "xpert smart pay",
    "xpert smart business",
    "xpert smart checkout",
  ];

  const content = ["Blog", "eBooks"];

  const company = ["Quem somos", "Parceiros", "Seja um distribuidor", "Contato"];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">xpert</h3>
            <div className="space-y-3">
              <p>
                <span className="text-primary">E-mail:</span>{" "}
                <a href="mailto:contato@xpert.com.br" className="hover:text-primary transition-smooth">
                  contato@xpert.com.br
                </a>
              </p>
              <p>
                <span className="text-primary">Telefone:</span>{" "}
                <a href="tel:+554621010101" className="hover:text-primary transition-smooth">
                  (46) 2101-0101
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Soluções</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Conteúdo</h4>
            <ul className="space-y-2">
              {content.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quem somos</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
