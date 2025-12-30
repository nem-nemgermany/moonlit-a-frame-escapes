import { MapPin, Phone, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Cabana A-Frame Moon Logo"
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/60 mb-6 max-w-md leading-relaxed">
              Cabana A-Frame Moon – locul perfect pentru a te reconecta cu natura 
              și cu cei dragi. O experiență unică în inima munților, aproape de Bran.
            </p>
            <p className="text-accent font-heading italic text-lg">
              "Liniște, natură și seri sub stele"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-heading font-bold text-lg mb-6">
              Navigare rapidă
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#despre" className="hover:text-accent transition-colors">
                  Despre cabană
                </a>
              </li>
              <li>
                <a href="#facilitati" className="hover:text-accent transition-colors">
                  Facilități
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-accent transition-colors">
                  Galerie foto
                </a>
              </li>
              <li>
                <a href="#locatie" className="hover:text-accent transition-colors">
                  Locație
                </a>
              </li>
              <li>
                <a href="#rezerva" className="hover:text-accent transition-colors">
                  Rezervări
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-background font-heading font-bold text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Predeluț, Bran, Brașov, România</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+40700000000" className="hover:text-accent transition-colors">
                  +40 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@aframemoon.ro" className="hover:text-accent transition-colors">
                  contact@aframemoon.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Cabana A-Frame Moon. Toate drepturile rezervate.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Făcut cu <Heart className="w-4 h-4 text-accent fill-accent" /> în România
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
