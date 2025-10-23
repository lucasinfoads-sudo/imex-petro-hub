import { Instagram, MessageCircle, Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";
import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  const services = [
    { name: "Coleta e Entrega Expressa", href: "#servicos" },
    { name: "Transporte de Medicamentos", href: "#servicos" },
    { name: "Entregas Corporativas", href: "#servicos" },
    { name: "Diagnóstico Gratuito", href: "#contato" },
  ];

  const company = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/ganhetempolog?igsh=N2R4YmJuNGNlaWo0", 
      label: "Instagram" 
    },
    { 
      icon: MessageCircle, 
      href: "https://api.whatsapp.com/send?phone=5547997234255&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ganhe%20Tempo%20Log%C3%ADstica%20💚", 
      label: "WhatsApp" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/ganhetempolog%C3%ADstica/", 
      label: "LinkedIn" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61564434553593", 
      label: "Facebook" 
    },
  ];

  return (
    <footer className={cn("gradient-primary text-primary-foreground py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-start">
          <div className="-ml-4">
            <img 
              src={logoTransparent} 
              alt="Ganhe Tempo Logística" 
              className="h-48 md:h-56 w-auto object-contain mb-4"
            />
            <p className="mb-4 text-primary-foreground/80 ml-4">
              Logística inteligente para empresas que valorizam cada entrega.
            </p>
            <div className="space-y-2 ml-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:ganhetempologistica@gmail.com" className="hover:text-accent transition-smooth text-sm">
                  ganhetempologistica@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://api.whatsapp.com/send?phone=5547997234255&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ganhe%20Tempo%20Log%C3%ADstica%20💚" className="hover:text-accent transition-smooth text-sm">
                  +55 47 9972-34255
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Itajaí, SC</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-smooth"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ganhe Tempo Logística. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
