import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const navItems = [
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Seja um distribuidor", href: "#distribuidor" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="gradient-hero sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              xpert
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground hover:text-white transition-smooth text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-smooth"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
