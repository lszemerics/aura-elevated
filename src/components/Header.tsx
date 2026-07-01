import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type Section = "house" | "gallery" | "rules" | "host";
type HomeSection = Exclude<Section, "rules" | "host">;

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: HomeSection) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const navItems: Exclude<Section, "host">[] = ["house", "gallery", "rules"];

const Header = ({ activeSection, onSectionChange, lang, onLangChange }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (key: Section) => {
    setMobileOpen(false);

    if (key === "rules") {
      if (location.pathname !== "/rules") {
        navigate("/rules");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (key === "host") {
      if (location.pathname !== "/host") {
        navigate("/host");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: key } });
      return;
    }

    onSectionChange(key);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-display text-xl tracking-tighter text-foreground">AURA</Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-[11px] tracking-[0.2em] uppercase">
          {navItems.map((key) => (
            <button
              key={key}
              onClick={() => handleNavClick(key)}
              className={`py-1 transition-all border-b ${activeSection === key ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {pick(translations.nav[key], l)}
            </button>
          ))}
          
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" target="_blank" rel="noopener" className="text-muted-foreground/70 hover:text-foreground transition-colors tracking-[0.15em] text-[10px]">
            Airbnb
          </a>
          <a href="https://szallas.hu/aura-vendeghaz-revfulop?checkin=2026-05-21&checkout=2026-05-24&ref=list&adults=2&provision=1&listIndex=0" target="_blank" rel="noopener" className="text-muted-foreground/70 hover:text-foreground transition-colors tracking-[0.15em] text-[10px]">
            Szállás.hu
          </a>

          {/* KIEMELT, PRÉMIUM FÓKUSZÚ FOGLALÁS GOMB DESKTOPON */}
          <button
            onClick={() => handleNavClick("host")}
            className={`px-5 py-2.5 transition-all duration-300 tracking-[0.2em] ml-2 rounded-none font-medium text-[10px] ${
              activeSection === "host"
                ? "bg-foreground text-background shadow-lg"
                : "bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            }`}
          >
            {pick(translations.nav.host, l)}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-body text-[11px] tracking-widest">
            <button onClick={() => onLangChange("hu")} className={lang === "hu" ? "font-bold text-foreground" : "text-muted-foreground"}>HU</button>
            <span className="text-border">/</span>
            <button onClick={() => onLangChange("en")} className={lang === "en" ? "font-bold text-foreground" : "text-muted-foreground"}>EN</button>
          </div>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-b border-border flex flex-col p-6 gap-6 font-body text-sm tracking-widest uppercase">
          <button onClick={() => handleNavClick("house")} className="text-left">{pick(translations.nav.house, l)}</button>
          <button onClick={() => handleNavClick("gallery")} className="text-left">{pick(translations.nav.gallery, l)}</button>
          <button onClick={() => handleNavClick("rules")} className="text-left">{pick(translations.nav.rules, l)}</button>
          
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" className="text-muted-foreground text-left text-xs">Airbnb</a>
          <a href="https://szallas.hu/aura-vendeghaz-revfulop?checkin=2026-05-21&checkout=2026-05-24&ref=list&adults=2&provision=1&listIndex=0" target="_blank" rel="noopener" className="text-muted-foreground text-left text-xs">Szállás.hu</a>
          
          {/* KIEMELT FOGLALÁS GOMB MOBILON */}
          <button 
            onClick={() => handleNavClick("host")} 
            className={`px-4 py-3.5 text-center font-semibold tracking-[0.2em] transition-all rounded-none text-xs ${
              activeSection === "host"
                ? "bg-foreground text-background"
                : "bg-foreground text-background active:bg-foreground/90"
            }`}
          >
            {pick(translations.nav.host, l)}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
