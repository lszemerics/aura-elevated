import { Mail, Phone, Scale, ShieldCheck, Globe, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const Footer = () => {
  const lang = useLang();
  const t = translations.footer;

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Interaktív térkép szekció - Pontos címre állítva */}
      <div className="w-full h-80 opacity-80 grayscale hover:grayscale-0 transition-all duration-700 border-b border-primary-foreground/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.4754530013996!2d17.625626076848245!3d46.83041994165502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769a921200db0df%3A0x637f6f3fa9a9d6e3!2zUsOpdmbDvGzDtnAsIElza29sYSB1LiAyNCwgODI1Mw!5e0!3m2!1shu!2shu!4v1708960000000!5m2!1shu!2shu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aura Vendégház lokáció - Révfülöp"
        ></iframe>
      </div>

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
              <p><strong>NTAK:</strong> MA26121274 (Magánszálláshely)</p>
              <p><strong>Tárhely:</strong> GitHub Inc. (support@github.com)</p>
            </div>

            {/* 2. ÁSZF és Foglalási feltételek */}
            <div className="space-y-2">
              <p className="font-bold text-primary-foreground/70 uppercase mb-3 flex items-center gap-2">
                <Globe className="w-3 h-3" /> Foglalási Feltételek
              </p>
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
            <div className="flex items-center gap-1 uppercase tracking-widest">
              <MapPin className="w-2.5 h-2.5" />
              <span>8253 Révfülöp, Iskola utca 24.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
