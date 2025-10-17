import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              💬 Pronto pra <span className="text-primary">simplificar sua logística?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              A Ganhe Tempo Logística está pronta pra ser o braço operacional do seu negócio.
              Entre em contato e descubra como podemos elevar sua entrega ao próximo nível.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-elegant p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome completo</label>
                  <Input type="text" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa</label>
                  <Input type="text" placeholder="Nome da empresa" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input type="tel" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de negócio</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmacia">Farmácia</SelectItem>
                    <SelectItem value="clinica">Clínica/Hospital</SelectItem>
                    <SelectItem value="escritorio">Escritório</SelectItem>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  placeholder="Conte-nos sobre suas necessidades logísticas..."
                  className="min-h-32"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-12 py-6 text-lg shadow-elegant w-full md:w-auto"
                >
                  📞 SOLICITAR PROPOSTA PERSONALIZADA
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Responderemos em até 24 horas úteis
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
