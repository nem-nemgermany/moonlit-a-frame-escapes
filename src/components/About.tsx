import cabinFront from "@/assets/cabin-front.jpg";

const About = () => {
  return (
    <section id="despre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medium">
              <img
                src={cabinFront}
                alt="Cabana A-Frame Moon - vedere frontală"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating accent element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Despre noi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Un refugiu unde timpul{" "}
              <span className="text-primary">încetinește</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Cabana A-Frame Moon este locul unde timpul încetinește. Situată în 
                Predeluț, aproape de Bran, cabana îmbină designul modern A-frame cu 
                liniștea naturii.
              </p>
              <p>
                Oferim o experiență intimă și relaxantă pentru cei care își doresc o 
                pauză reală de la ritmul alert al vieții de zi cu zi.
              </p>
              <p>
                Fie că veniți în cuplu pentru o escapadă romantică sau cu familia 
                pentru a crea amintiri de neuitat, cabana noastră vă așteaptă cu 
                căldură și confort.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground mt-1">Persoane capacitate</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">500m²</div>
                <div className="text-sm text-muted-foreground mt-1">Curte privată</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground mt-1">Rating oaspeți</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
