import { 
  Flame, 
  UtensilsCrossed, 
  TreePine, 
  Sofa, 
  Bed, 
  ChefHat, 
  Mountain, 
  Users, 
  Baby 
} from "lucide-react";

const amenities = [
  {
    icon: Flame,
    title: "Foc de tabără",
    description: "Seri magice lângă flăcările calde",
  },
  {
    icon: UtensilsCrossed,
    title: "Zonă BBQ",
    description: "Grătar tradițional în aer liber",
  },
  {
    icon: TreePine,
    title: "Curte privată",
    description: "Spațiu verde doar pentru voi",
  },
  {
    icon: Sofa,
    title: "Living cozy",
    description: "Confort și relaxare în interior",
  },
  {
    icon: Bed,
    title: "Dormitor confortabil",
    description: "Somn liniștit sub crestele munților",
  },
  {
    icon: ChefHat,
    title: "Bucătărie utilată",
    description: "Tot ce ai nevoie pentru gătit",
  },
  {
    icon: Mountain,
    title: "Priveliște spre munți",
    description: "Panoramă spectaculoasă",
  },
  {
    icon: Users,
    title: "Ideal pentru familii",
    description: "Spațiu pentru toată familia",
  },
  {
    icon: Baby,
    title: "Loc de joacă copii",
    description: "Distracție garantată pentru cei mici",
  },
];

const Amenities = () => {
  return (
    <section id="facilitati" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Facilități
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Tot ce ai nevoie pentru o{" "}
            <span className="text-primary">vacanță perfectă</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cabana noastră oferă toate facilitățile pentru o experiență completă 
            în mijlocul naturii
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="card-warm p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-feature mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <amenity.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
