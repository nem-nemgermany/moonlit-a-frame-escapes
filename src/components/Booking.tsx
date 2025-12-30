import { Calendar, Phone, MessageCircle, CreditCard } from "lucide-react";

const Booking = () => {
  return (
    <section id="rezerva" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/5 rounded-full blur-2xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Rezervări
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Rezervă-ți escapada acum
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            Rezervările directe înseamnă cele mai bune prețuri și comunicare 
            directă cu noi pentru orice nevoie specială.
          </p>
          <p className="text-accent font-medium mb-10">
            Fără comisioane intermediare, fără surprize!
          </p>

          {/* Booking Options */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+40700000000"
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Telefon
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Sună-ne pentru rezervări rapide
              </p>
            </a>

            <a
              href="https://wa.me/40700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Scrie-ne oricând pe WhatsApp
              </p>
            </a>

            <a
              href="https://booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                Booking.com
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Vezi disponibilitatea online
              </p>
            </a>
          </div>

          {/* Main CTA */}
          <a
            href="tel:+40700000000"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-lg px-10 py-5 rounded-xl shadow-glow hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Rezervă direct: +40 700 000 000
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
