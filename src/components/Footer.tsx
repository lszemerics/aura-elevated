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

          <div className="w-12 h-px bg-primary-foreground/20 mx-auto mb-6" />

          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} {pick(t.copyright, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
