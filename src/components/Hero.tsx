import { ChevronDown, MapPin } from "lucide-react";
import heroImage from "@/assets/cabin-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cabana A-Frame Moon în Predeluț, Bran"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-background text-sm font-medium">Predeluț, Bran</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-background mb-6 animate-fade-up opacity-0 leading-tight" style={{ animationDelay: "0.4s" }}>
            Cabana A-Frame Moon
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-background/90 font-light mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            Liniște, natură și seri sub stele
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
            Escapada perfectă pentru cupluri și familii, departe de agitația orașului
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "1s" }}>
            <a href="#rezerva" className="btn-primary-hero animate-pulse-glow">
              Rezervă acum
            </a>
            <a href="#galerie" className="btn-secondary-hero">
              Descoperă cabana
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "1.4s" }}>
        <a href="#despre" className="flex flex-col items-center gap-2 text-background/70 hover:text-background transition-colors">
          <span className="text-sm font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
