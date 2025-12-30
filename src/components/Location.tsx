import { MapPin, Castle, Mountain, TreePine, Footprints } from "lucide-react";

const attractions = [
  {
    icon: Castle,
    name: "Castelul Bran",
    distance: "10 km",
  },
  {
    icon: Mountain,
    name: "Munții Bucegi",
    distance: "25 km",
  },
  {
    icon: TreePine,
    name: "Plimbări în natură",
    distance: "din curte",
  },
  {
    icon: Footprints,
    name: "Drumeții montane",
    distance: "diverse trasee",
  },
];

const Location = () => {
  return (
    <section id="locatie" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Locație
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              În inima naturii,{" "}
              <span className="text-primary">aproape de tot</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Cabana se află în Predeluț, Bran – o zonă liniștită, aproape de 
              atracțiile turistice, dar suficient de retrasă pentru relaxare 
              totală. Locația perfectă pentru a explora regiunea sau pur și 
              simplu pentru a te bucura de liniște.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-3 mb-10 text-foreground">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">Predeluț, Bran, Brașov, România</span>
            </div>

            {/* Attractions */}
            <div className="grid grid-cols-2 gap-6">
              {attractions.map((attr) => (
                <div key={attr.name} className="flex items-start gap-4">
                  <div className="icon-feature flex-shrink-0">
                    <attr.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{attr.name}</h4>
                    <p className="text-sm text-muted-foreground">{attr.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.123456789!2d25.37!3d45.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzEyLjAiTiAyNcKwMjInMTIuMCJF!5e0!3m2!1sro!2sro!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Cabanei A-Frame Moon"
              className="grayscale-[30%] contrast-[1.1]"
            />
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-72 bg-background/95 backdrop-blur-sm rounded-xl p-5 shadow-medium">
              <h4 className="font-heading font-bold text-foreground mb-1">
                Cabana A-Frame Moon
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Predeluț, Bran, Brașov
              </p>
              <a
                href="https://maps.google.com/?q=45.52,25.37"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Deschide în Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
