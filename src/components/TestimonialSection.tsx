import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-primary mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            "A logística certa não é a mais rápida.{" "}
            <span className="text-primary">É a que nunca falha.</span>"
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold">Ganhe Tempo Logística</p>
            <p className="text-muted-foreground">
              Compromisso com excelência operacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
