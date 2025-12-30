import { Coffee, Flame, Sunset, Wind } from "lucide-react";
import terraceImg from "@/assets/terrace.jpg";
import firepitImg from "@/assets/firepit.jpg";
import sunsetImg from "@/assets/cabin-sunset.jpg";
import winterImg from "@/assets/winter-cabin.jpg";

const experiences = [
  {
    icon: Coffee,
    title: "Dimineți cu cafeaua pe terasă",
    description: "Trezește-te cu răsăritul și savurează o cafea caldă admirând munții",
    image: terraceImg,
  },
  {
    icon: Flame,
    title: "Seri lângă foc",
    description: "Conversații, povești și marshmallows prăjite sub cerul înstelat",
    image: firepitImg,
  },
  {
    icon: Sunset,
    title: "Apusuri spectaculoase",
    description: "Culorile cerului se reflectă peste peisajul montan",
    image: sunsetImg,
  },
  {
    icon: Wind,
    title: "Liniște și aer curat",
    description: "Respiră adânc și simte cum stresul dispare în natură",
    image: winterImg,
  },
];

const Experience = () => {
  return (
    <section id="experienta" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Experiența
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Mai mult decât o simplă{" "}
            <span className="text-primary">cazare</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fiecare moment petrecut aici devine o amintire prețioasă
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative overflow-hidden rounded-2xl shadow-medium h-[400px]"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-background mb-2">
                  {exp.title}
                </h3>
                <p className="text-background/80">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-heading italic text-foreground/80 leading-relaxed">
              "Aici nu vii doar să dormi. Vii să trăiești, să respiri, să te regăsești."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Experience;
