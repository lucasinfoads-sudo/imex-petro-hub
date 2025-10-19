import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Building2, Mail, Phone, Briefcase } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const NewsletterSection = () => {
  return (
    <section id="contato" className="py-16 gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto pra simplificar sua{" "}
            <span className="text-primary">logística?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Solicite seu diagnóstico gratuito e descubra como podemos elevar suas entregas ao próximo nível
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Nome da Empresa"
                  className="pl-10 h-12"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="E-mail corporativo"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="pl-10 h-12"
                  required
                />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Select required>
                  <SelectTrigger className="pl-10 h-12">
                    <SelectValue placeholder="Tipo de Negócio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmacia">Farmácia</SelectItem>
                    <SelectItem value="clinica">Clínica</SelectItem>
                    <SelectItem value="escritorio">Escritório</SelectItem>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-elegant hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-smooth mt-4"
            >
              SOLICITAR DIAGNÓSTICO GRATUITO
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
