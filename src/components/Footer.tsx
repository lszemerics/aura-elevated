import { Mail, Phone, Scale, ShieldCheck, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const Footer = () => {
  const lang = useLang();
  const t = translations.footer;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center">
          <h4 className="font-display text-2xl font-light tracking-tight mb-2">AURA</h4>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-8">{pick(t.subtitle, lang)}</p>

          {/* Elérhetőségek */}
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

          <div className="w-12 h-px bg-primary-foreground/20 mx-auto mb-10" />

          {/* Jogi szekciók - 3 oszlopos elrendezés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[10px] text-primary-foreground/50 font-body tracking-wider text-left border-t border-primary-foreground/10 pt-10">
            
            {/* 1. Impresszum és NTAK */}
            <div className="space-y-2">
              <p className="font-bold text-primary-foreground/70 uppercase mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Impresszum & NTAK
              </p>
              <p><strong>Szolgáltató:</strong> Aura Vendégház</p>
              <p><strong>Cím:</strong> 8253 Révfülöp, Iskola utca 24.</p>
              <p><strong>NTAK:</strong> Y6RBHQUR (Magánszálláshely)</p>
              <p><strong>Tárhely:</strong> GitHub Inc. (support@github.com)</p>
            </div>

            {/* 2. ÁSZF és Foglalási feltételek */}
            <div className="space-y-2">
              <p className="font-bold text-primary-foreground/70 uppercase mb-3 flex items-center gap-2">
                <Globe className="w-3 h-3" /> Foglalási Feltételek
              </p>
              <p>A weboldal közvetlen online foglalást nem végez. A foglalás és fizetés külső partnereinken (Airbnb, Booking.com) keresztül történik.</p>
              <p>A mindenkor érvényes árakat, a lemondási feltételeket és a házirendet a választott foglalási portál tartalmazza.</p>
            </div>

            {/* 3. Panaszkezelés & Adatvédelem */}
            <div className="space-y-2">
              <p className="font-bold text-primary-foreground/70 uppercase mb-3 flex items-center gap-2">
                <Scale className="w-3 h-3" /> Jogorvoslat & GDPR
              </p>
              <p>Panasz esetén: aura.vofi@gmail.com / +36 20 509 8419</p>
              <p><strong>Adatvédelem:</strong> Az oldal sütiket (cookie) használ. Személyes adatgyűjtés itt nem történik; az adatkezelés a foglalási platformok szabályzata szerint alakul.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[9px]">
            <p>© {new Date().getFullYear()} {pick(t.copyright, lang)}</p>
            <p className="italic underline decoration-dotted underline-offset-4 tracking-widest">Aura Vendégház Révfülöp</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
