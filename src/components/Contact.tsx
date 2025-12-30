import { Phone, MessageCircle, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Hai să stăm de{" "}
              <span className="text-primary">vorbă</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Suntem aici pentru a răspunde la toate întrebările tale și pentru 
              a te ajuta să planifici vacanța perfectă.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+40700000000"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-muted transition-colors group"
              >
                <div className="icon-feature group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold text-foreground">+40 700 000 000</p>
                </div>
              </a>

              <a
                href="https://wa.me/40700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-muted transition-colors group"
              >
                <div className="icon-feature group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">+40 700 000 000</p>
                </div>
              </a>

              <a
                href="mailto:contact@aframemoon.ro"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-muted transition-colors group"
              >
                <div className="icon-feature group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">contact@aframemoon.ro</p>
                </div>
              </a>
            </div>

            {/* Check-in Info */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Program check-in / check-out</p>
                <p className="text-muted-foreground">Check-in: 15:00 | Check-out: 11:00</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm text-muted-foreground mb-4">Urmărește-ne pe social media</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-warm p-8 lg:p-10">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Trimite-ne un mesaj
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nume complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+40 7xx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="email@exemplu.ro"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-foreground mb-2">
                    Data check-in
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-foreground mb-2">
                    Data check-out
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Spune-ne mai multe despre sejurul dorit..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary-hero text-center"
              >
                Trimite mesajul
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
