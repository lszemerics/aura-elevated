import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type Section = "house" | "gallery" | "rules";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: any) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const Header = ({ activeSection, onSectionChange, lang, onLangChange }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (key: Section) => {
    setMobileOpen(false);
    if (key === "rules") {
      if (location.pathname !== "/rules") navigate("/rules");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: key } });
      } else {
        onSectionChange(key);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="font-display text-xl tracking-tighter">AURA</Link>
        
        <nav className="hidden md:flex items-center gap-8 font-body text-xs tracking-[0.2em] uppercase">
          {["house", "gallery", "rules"].map((key: any) => (
            <button
              key={key}
              onClick={() => handleNavClick(key)}
              className={`py-1 transition-all border-b ${activeSection === key ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {pick(translations.nav[key as keyof typeof translations.nav], l)}
            </button>
          ))}
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" target="_blank" rel="noopener" className="text-[#FF5A5F] font-bold hover:opacity-80 transition-opacity">Airbnb</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-body text-xs tracking-widest">
            <button onClick={() => onLangChange("hu")} className={lang === "hu" ? "font-bold text-foreground" : "text-muted-foreground"}>HU</button>
            <span className="text-border">/</span>
            <button onClick={() => onLangChange("en")} className={lang === "en" ? "font-bold text-foreground" : "text-muted-foreground"}>EN</button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-border flex flex-col p-6 gap-6 font-body text-sm tracking-widest uppercase">
          <button onClick={() => handleNavClick("house")}>{pick(translations.nav.house, l)}</button>
          <button onClick={() => handleNavClick("gallery")}>{pick(translations.nav.gallery, l)}</button>
          <button onClick={() => handleNavClick("rules")}>{pick(translations.nav.rules, l)}</button>
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" className="text-[#FF5A5F] font-bold">Airbnb Foglalás</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
