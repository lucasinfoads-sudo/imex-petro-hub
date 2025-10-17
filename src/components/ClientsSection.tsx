import { Button } from "./ui/button";

const ClientsSection = () => {
  const clients = [
    "Farmácias Regionais",
    "Clínicas Médicas",
    "Escritórios de Advocacia",
    "Lojas de Varejo",
    "Distribuidoras",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">+200</span> EMPRESAS PARCEIRAS
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Empresas que confiam na Ganhe Tempo para suas entregas estratégicas
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8">
            QUERO SER PARCEIRO
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mt-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground hover:text-primary transition-smooth text-center"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
