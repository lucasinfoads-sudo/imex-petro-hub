import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Atuam só em Itajaí?",
      answer:
        "Não. Já atendemos diversas cidades de Santa Catarina e seguimos expandindo nossa área de cobertura mantendo o mesmo padrão de qualidade.",
    },
    {
      question: "Que tipo de entregas fazem?",
      answer:
        "Medicamentos, documentos, itens corporativos e produtos sensíveis. Nossa equipe é treinada para lidar com entregas que exigem cuidado especial e rastreabilidade total.",
    },
    {
      question: "Como é feita a parceria?",
      answer:
        "Começamos com um diagnóstico gratuito das suas necessidades, depois montamos um contrato transparente com valores claros e oferecemos acompanhamento em tempo real de todas as entregas.",
    },
    {
      question: "E se houver imprevisto?",
      answer:
        "Nossa equipe age na hora — resolvemos antes de virar problema. Temos central de controle ativa e comunicação direta para responder imediatamente a qualquer situação.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ❓ <span className="text-primary">Dúvidas frequentes.</span>
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
