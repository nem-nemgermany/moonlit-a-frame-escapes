import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria și Andrei",
    location: "București",
    rating: 5,
    text: "O cabană superbă, liniște totală, perfectă pentru relaxare. Am stat 3 nopți și nu ne-am mai dorit să plecăm. Gazdele sunt minunate!",
  },
  {
    name: "Familia Popescu",
    location: "Cluj-Napoca",
    rating: 5,
    text: "Experiență minunată cu copiii! Le-a plăcut locul de joacă, iar noi am savurat serile lângă foc. Revenim cu siguranță!",
  },
  {
    name: "Elena",
    location: "Timișoara",
    rating: 5,
    text: "Locul perfect pentru o escapadă romantică. Priveliștea de pe terasă este spectaculoasă, iar cabana are tot confortul necesar.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Testimoniale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ce spun{" "}
            <span className="text-primary">oaspeții noștri</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiențele lor sunt cea mai bună recomandare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-warm p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-background rounded-full px-8 py-4 shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-left">
              <p className="font-heading font-bold text-foreground">5.0 din 5</p>
              <p className="text-sm text-muted-foreground">Rating mediu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
