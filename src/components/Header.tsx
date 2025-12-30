import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Despre", href: "#despre" },
    { label: "Facilități", href: "#facilitati" },
    { label: "Experiența", href: "#experienta" },
    { label: "Galerie", href: "#galerie" },
    { label: "Locație", href: "#locatie" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cabana A-Frame Moon Logo"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-background"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40700000000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-background hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Sună acum</span>
            </a>
            <a
              href="#rezerva"
              className="btn-primary-hero text-sm py-3 px-6"
            >
              Rezervă acum
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-medium animate-fade-in">
            <nav className="flex flex-col py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-border mt-4 flex flex-col gap-3">
                <a
                  href="tel:+40700000000"
                  className="flex items-center gap-2 text-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>Sună acum</span>
                </a>
                <a
                  href="#rezerva"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary-hero text-center"
                >
                  Rezervă acum
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
