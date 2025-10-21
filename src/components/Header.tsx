import { Menu, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useNavigate } from "react-router-dom";
import logoTransparent from "@/assets/logo-transparent.png";
const Header = () => {
  const navigate = useNavigate();
  const navItems = [{
    label: "Quem Somos",
    href: "#sobre"
  }, {
    label: "Soluções",
    href: "#servicos"
  }, {
    label: "Diferenciais",
    href: "#diferenciais"
  }, {
    label: "Conteúdo",
    href: "#conteudo"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  return <header className="bg-logo-green sticky top-0 z-50 border-b border-primary-dark shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <div className="flex items-center order-2 lg:order-1">
            <img src={logoTransparent} alt="Ganhe Tempo Logística" className="h-20 md:h-24 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 order-1 lg:order-2">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-primary-foreground hover:text-accent transition-smooth text-sm font-medium">
                {item.label}
              </a>)}
            <Button onClick={() => navigate("/auth")} variant="outline" size="sm" className="ml-4 border-primary-foreground hover:bg-primary-foreground text-yellow-500">
              <LogIn className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map(item => <a key={item.label} href={item.href} className="text-lg font-medium text-primary-foreground hover:text-accent transition-smooth">
                    {item.label}
                  </a>)}
                <Button onClick={() => navigate("/auth")} variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary mt-4">
                  <LogIn className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;