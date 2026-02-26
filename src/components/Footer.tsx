import { Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const Footer = () => {
  const lang = useLang();
  const t = translations.footer;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center">
          <h4 className="font-display text-2xl font-light tracking-tight mb-2">AURA</h4>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-8">{pick(t.subtitle, lang)}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:aura.vofi@gmail.com" className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              aura.vofi@gmail.com
            </a>
            <a href="tel:+36205098419" className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +36 20 509 8419
            </a>
          </div>

          <div className="w-12 h-px bg-primary-foreground/20 mx-auto mb-8" />

          {/* Hivatalos adatok szekció */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] text-primary-foreground/50 font-body tracking-wider text-left md:text-center border-t border-primary-foreground/10 pt-8">
            <div className="space-y-1">
              <p className="font-bold text-primary-foreground/70 uppercase mb-2">Szálláshely adatok</p>
              <p>NTAK regisztrációs szám: Y6RBHQUR</p>
              <p>Szálláshely típusa: Magánszálláshely</p>
              <p>Cím: 8253 Révfülöp, Iskola utca 24.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-primary-foreground/70 uppercase mb-2">Impresszum</p>
              <p>Szolgáltató: Aura Vendégház</p>
              <p>Tárhely: GitHub Inc. (San Francisco, USA)</p>
              <p>Kapcsolat: support@github.com</p>
            </div>
          </div>

          <p className="font-body text-[10px] text-primary-foreground/30 mt-12 italic">
            A foglalások az Airbnb rendszerén keresztül valósulnak meg.
          </p>
          
          <p className="font-body text-[10px] text-primary-foreground/40 mt-4">
            © {new Date().getFullYear()} {pick(t.copyright, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
