import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um sistema para posto de combustível?",
      answer:
        "Esse sistema auxilia na gestão e operação de postos de combustível e lojas de conveniência, incluindo funcionalidades como controle de estoque, vendas, emissão de notas fiscais e atendimento ao cliente.",
    },
    {
      question: "Como funciona um sistema para posto de combustível?",
      answer:
        "O sistema integra todas as operações do posto, desde o abastecimento até a loja de conveniência, fornecendo relatórios em tempo real e automatizando processos.",
    },
    {
      question: "Quais são os benefícios de um sistema para posto de combustível?",
      answer:
        "Os principais benefícios incluem maior controle operacional, redução de perdas, otimização de estoque, facilidade na gestão financeira e conformidade fiscal.",
    },
    {
      question: "Qual o melhor sistema para posto de combustível?",
      answer:
        "O xpert é o sistema líder de mercado, com mais de 30 anos de experiência e 6 mil clientes satisfeitos em todo o Brasil.",
    },
    {
      question: "Como funciona o sistema TEF do xpert?",
      answer:
        "O sistema TEF (Transferência Eletrônica de Fundos) está integrado ao PDV, permitindo processar pagamentos com cartões de forma rápida e segura.",
    },
    {
      question: "Quanto tempo dura a implantação?",
      answer:
        "O tempo de implantação varia de acordo com o tamanho do posto, mas geralmente leva de 2 a 4 semanas, incluindo treinamento completo da equipe.",
    },
    {
      question: "O sistema xpert é homologado nas bandeiras de posto de gasolina?",
      answer:
        "Sim, o xpert é homologado nas principais bandeiras: Petrobras, Shell e Ipiranga, entre outras.",
    },
  ];

  return (
    <section className="py-16 gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Saiba mais sobre sistema para postos
          <br />
          de combustível e conveniência
        </h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
