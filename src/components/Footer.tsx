import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center">
          <h4 className="font-display text-2xl font-light tracking-tight mb-2">AURA</h4>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-8">Vendégház · Révfülöp</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:Eniko.Vofkori@iconplc.com" className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              Eniko.Vofkori@iconplc.com
            </a>
            <a href="tel:+36305448908" className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +36 30 544 8908
            </a>
          </div>

          <div className="w-12 h-px bg-primary-foreground/20 mx-auto mb-6" />

          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Aura Vendégház. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
