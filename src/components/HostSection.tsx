import { Mail, Phone, User } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const HostSection = () => {
  const lang = useLang();
  const t = translations.host;

  return (
    <section id="host-profile" className="py-20 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <div className="order-1 md:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 border border-border bg-muted/30 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <User strokeWidth={1} size={64} />
                <p className="font-body text-[10px] tracking-[0.3em] uppercase">
                  {pick(t.portraitPlaceholder, lang)}
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-2 space-y-8">
            <div className="space-y-3">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                {pick(t.sectionLabel, lang)}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
                {pick(t.title, lang)}
              </h1>
            </div>

            <div className="w-12 h-[1px] bg-border" />

            <div className="space-y-1">
              <p className="font-display text-2xl md:text-3xl font-light tracking-wide">
                {pick(t.name, lang)}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {pick(t.role, lang)}
              </p>
            </div>

            <div className="font-body text-base text-muted-foreground leading-relaxed space-y-4 whitespace-pre-line">
              {pick(t.bio, lang)}
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                {pick(t.contactLabel, lang)}
              </p>
              <div className="flex flex-col gap-3">
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
      </div>
    </section>
  );
};

export default HostSection;