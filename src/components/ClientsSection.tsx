import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import clienteFct from "@/assets/clients/cliente-fct.png";
import clienteMagnitude from "@/assets/clients/cliente-magnitude.jpg";
import clienteVom from "@/assets/clients/cliente-vom.jpg";
import clienteRft from "@/assets/clients/cliente-rft.jpg";
import clienteMpa from "@/assets/clients/cliente-mpa.jpg";
import clienteMaster from "@/assets/clients/cliente-master.jpg";
import clienteFarma from "@/assets/clients/cliente-farma.png";
import clienteSaoRafael from "@/assets/clients/cliente-sao-rafael.png";
import clienteBrasilPopular from "@/assets/clients/cliente-brasil-popular.png";

const ClientsSection = () => {
  const clients = [
    { name: "FCT Farmácia", logo: clienteFct },
    { name: "Magnitude Cosméticos", logo: clienteMagnitude },
    { name: "VOM Store", logo: clienteVom },
    { name: "RFT Farmácias", logo: clienteRft },
    { name: "MPÁ Gestão", logo: clienteMpa },
    { name: "Master Farma", logo: clienteMaster },
    { name: "Farma e Farma", logo: clienteFarma },
    { name: "São Rafael Farmácias", logo: clienteSaoRafael },
    { name: "Brasil Popular", logo: clienteBrasilPopular },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">+40</span> EMPRESAS PARCEIRAS
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Empresas que confiam na Ganhe Tempo para suas entregas estratégicas
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 animate-pulse hover:animate-none">
            QUERO SER PARCEIRO
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full mt-16"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth hover-scale h-32">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-h-20 max-w-full object-contain transition-smooth"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
