import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

type Section = "house" | "gallery" | "rules";
type HomeSection = Exclude<Section, "rules">;

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: HomeSection) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const navItems: Section[] = ["house", "gallery", "rules"];

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
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" target="_blank" rel="noopener" className="text-primary font-semibold hover:opacity-80 transition-opacity tracking-[0.15em]">
            Airbnb
          </a>
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
          <button onClick={() => handleNavClick("house")}>{pick(translations.nav.house, l)}</button>
          <button onClick={() => handleNavClick("gallery")}>{pick(translations.nav.gallery, l)}</button>
          <button onClick={() => handleNavClick("rules")}>{pick(translations.nav.rules, l)}</button>
          <a href="https://www.airbnb.hu/rooms/1591647579928631355" className="text-primary font-semibold">Airbnb</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
