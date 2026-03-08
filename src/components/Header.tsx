import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import { Link, useNavigate, useLocation } from "react-router-dom";

type Section = "house" | "gallery" | "rules";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const Header = ({ activeSection, onSectionChange, lang, onLangChange }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (key: Section) => {
    if (key === "rules") {
      navigate("/rules");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for page to render before scrolling
        requestAnimationFrame(() => {
          setTimeout(() => onSectionChange(key), 150);
        });
      } else {
        onSectionChange(key);
      }
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-xl tracking-tighter hover:opacity-70 transition-opacity">AURA</Link>
        
        <nav className="hidden md:flex items-center gap-10 font-body text-sm tracking-[0.2em] uppercase">
          <button onClick={() => handleNavClick("house")} className={`py-1 ${activeSection === "house" ? "border-b-2 border-foreground" : "text-muted-foreground"}`}>
            {pick(translations.nav.house, l)}
          </button>
          <button onClick={() => handleNavClick("gallery")} className={`py-1 ${activeSection === "gallery" ? "border-b-2 border-foreground" : "text-muted-foreground"}`}>
            {pick(translations.nav.gallery, l)}
          </button>
          <button onClick={() => handleNavClick("rules")} className={`py-1 ${activeSection === "rules" ? "border-b-2 border-foreground" : "text-muted-foreground"}`}>
            {pick(translations.nav.rules, l)}
          </button>
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" target="_blank" className="text-[#FF5A5F] font-semibold">Airbnb</a>
        </nav>

        <div className="flex items-center gap-2">
           <button onClick={() => onLangChange("hu")} className={lang === "hu" ? "font-bold" : "text-muted-foreground"}>HU</button>
           <span>/</span>
           <button onClick={() => onLangChange("en")} className={lang === "en" ? "font-bold" : "text-muted-foreground"}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
