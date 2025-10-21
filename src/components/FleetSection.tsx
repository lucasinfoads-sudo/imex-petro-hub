import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Linkedin, Facebook } from "lucide-react";
import sedeImage from "@/assets/sede-ganhe-tempo.jpg";
import teamImage from "@/assets/team-ganhe-tempo.jpg";
import deliveryTeamImage from "@/assets/delivery-team.jpg";
import mapaCobertura from "@/assets/mapa-cobertura.jpg";

const FleetSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: deliveryTeamImage, alt: "Equipe de entrega Ganhe Tempo uniformizada" },
    { src: sedeImage, alt: "Sede da Ganhe Tempo Logística" },
    { src: teamImage, alt: "Time Ganhe Tempo" },
  ];

  return (
    <>
      <section className="py-16 gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossa <span className="text-primary">Estrutura</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-video">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                  <p className="text-white font-semibold p-4 text-sm md:text-base">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa de Cobertura - Fileira separada */}
          <div className="mt-12 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Área de <span className="text-primary">Cobertura</span>
            </h3>
            <div
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-smooth cursor-pointer"
              onClick={() => setSelectedImage(mapaCobertura)}
            >
              <div className="w-full">
                <img
                  src={mapaCobertura}
                  alt="Mapa de cobertura das entregas"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                <p className="text-white font-semibold p-4 text-sm md:text-base">
                  Clique para ampliar o mapa de cobertura
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold mb-4">Siga-nos nas redes sociais</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564434553593"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth"
              >
                <Facebook className="w-6 h-6" />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FleetSection;
