import { useState } from "react";

type Section = "house" | "gallery" | "rules";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const navItems: { key: Section; label: string }[] = [
  { key: "house", label: "Aura Vendégház" },
  { key: "gallery", label: "Galéria" },
  { key: "rules", label: "Házirend" },
];

const Header = ({ activeSection, onSectionChange, lang, onLangChange }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Language Switcher */}
        <div className="flex items-center gap-1 font-body text-sm tracking-widest uppercase">
          <button
            onClick={() => onLangChange("hu")}
            className={`px-2 py-1 transition-colors ${
              lang === "hu" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            HU
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => onLangChange("en")}
            className={`px-2 py-1 transition-colors ${
              lang === "en" ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-body text-sm tracking-[0.2em] uppercase">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onSectionChange(item.key)}
              className={`py-1 transition-colors border-b-2 ${
                activeSection === item.key
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 animate-fade-in">
          <nav className="flex flex-col gap-4 font-body text-sm tracking-[0.2em] uppercase">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => { onSectionChange(item.key); setMobileOpen(false); }}
                className={`text-left ${activeSection === item.key ? "text-foreground font-semibold" : "text-muted-foreground"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
