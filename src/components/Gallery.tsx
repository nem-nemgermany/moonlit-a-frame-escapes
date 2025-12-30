import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImg from "@/assets/cabin-hero.jpg";
import sunsetImg from "@/assets/cabin-sunset.jpg";
import firepitImg from "@/assets/firepit.jpg";
import seatingImg from "@/assets/outdoor-seating.jpg";
import bbqImg from "@/assets/bbq-cabin.jpg";
import yardImg from "@/assets/yard-view.jpg";
import terraceImg from "@/assets/terrace.jpg";
import winterImg from "@/assets/winter-cabin.jpg";
import frontImg from "@/assets/cabin-front.jpg";

const images = [
  { src: heroImg, alt: "Cabana A-Frame Moon - vedere panoramică" },
  { src: sunsetImg, alt: "Cabana la apus de soare" },
  { src: firepitImg, alt: "Zona de foc de tabără" },
  { src: seatingImg, alt: "Zona de relaxare în curte" },
  { src: bbqImg, alt: "BBQ și priveliște" },
  { src: yardImg, alt: "Curtea și facilități" },
  { src: terraceImg, alt: "Terasa cu vedere la munți" },
  { src: winterImg, alt: "Cabana iarna" },
  { src: frontImg, alt: "Vedere frontală a cabanei" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="galerie" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Galerie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Descoperă{" "}
            <span className="text-primary">frumusețea</span> locului
          </h2>
          <p className="text-muted-foreground text-lg">
            Imagini din toate anotimpurile, din interior și exterior
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-[400px] md:h-[500px]" : "h-[200px] md:h-[240px]"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground">
                  Vezi imagine
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
            aria-label="Închide"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-8 text-background hover:text-accent transition-colors"
            aria-label="Imagine anterioară"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 text-background hover:text-accent transition-colors"
            aria-label="Imagine următoare"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/70 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
