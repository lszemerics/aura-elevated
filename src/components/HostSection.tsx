import { Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import hostPortrait from "@/assets/aura-vendeghaz-host-portrait.jpg";

const HostSection = () => {
  const lang = useLang();
  const t = translations.host;

  return (
    <section id="host-profile" className="py-24 md:py-36 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-12">
          {/* Section label */}
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            {pick(t.sectionLabel, lang)}
          </p>

          {/* Oval portrait */}
          <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-full border border-border bg-muted/30 overflow-hidden">
            <img
              src={hostPortrait}
              alt={pick(t.portraitAlt, lang)}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
            {pick(t.title, lang)}
          </h1>

          {/* Name & role */}
          <div className="space-y-2">
            <p className="font-display text-2xl md:text-3xl font-light tracking-wide">
              {pick(t.name, lang)}
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {pick(t.role, lang)}
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-border" />

          {/* Contact */}
          <div className="space-y-6 w-full flex flex-col items-center">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
              {pick(t.contactLabel, lang)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <a
                href={`mailto:${t.email}`}
                className="group inline-flex items-center gap-3 font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors"
              >
                <Mail strokeWidth={1.25} size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span>{t.email}</span>
              </a>
              <a
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                className="group inline-flex items-center gap-3 font-body text-sm tracking-wide text-foreground hover:text-primary transition-colors"
              >
                <Phone strokeWidth={1.25} size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span>{t.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;