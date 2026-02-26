import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

type Section = "house" | "gallery" | "rules";

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  lang: "hu" | "en";
  onLangChange: (lang: "hu" | "en") => void;
}

const navKeys: Section[] = ["house", "gallery", "rules"];
const airbnbUrl = "https://www.airbnb.hu/rooms/1591647579928631355";

const Header = ({ activeSection, onSectionChange, lang, onLangChange }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = useLang();

  const navLabels: Record<Section, string> = {
    house: pick(translations.nav.house, l),
    gallery: pick(translations.nav.gallery, l),
    rules: pick(translations.nav.rules, l),
  };

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
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => onSectionChange(key)}
              className={`py-1 transition-colors border-b-2 ${
                activeSection === key
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {navLabels[key]}
            </button>
          ))}
          {/* Airbnb Link (Desktop) */}
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-[#FF5A5F] hover:opacity-80 transition-opacity font-semibold border-b-2 border-transparent"
          >
            Airbnb
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
