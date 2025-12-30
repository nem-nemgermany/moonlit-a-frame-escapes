import { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="sticky-cta animate-scale-in">
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors z-10"
          aria-label="Închide"
        >
          <X className="w-3 h-3" />
        </button>
        <a
          href="#rezerva"
          className="flex items-center gap-3 bg-accent text-accent-foreground font-bold px-6 py-4 rounded-full shadow-glow hover:scale-105 transition-transform animate-pulse-glow"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Rezervă acum</span>
          <span className="sm:hidden">Rezervă</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
