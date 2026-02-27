import interiorLiving from "@/assets/aura-vendeghaz-living.jpg";
import interiorAttic from "@/assets/aura-vendeghaz-attic.jpg";
import gardenImg from "@/assets/aura-vendeghaz-garden.jpg";
import { Bed, Snowflake, Baby, Trees, Wifi, Car, UtensilsCrossed, Tv } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const featureIcons = [Bed, Snowflake, Baby, Trees, Wifi, Car, UtensilsCrossed, Tv];

const GuestHouseSection = () => {
  const lang = useLang();
  const t = translations.house;

  return (
    <section id="house" className="pt-24">
      {/* Intro */}
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {pick(t.sectionLabel, lang)}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-8">
          {pick(t.heading1, lang)}<br />{pick(t.heading2, lang)}
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {pick(t.intro, lang)}
        </p>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {t.features.map((f, i) => {
            const Icon = featureIcons[i];
            const data = f[lang];
            return (
              <div key={i} className="text-center p-6 bg-card rounded border border-border hover:border-foreground/20 transition-colors">
                <Icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-body text-sm font-semibold tracking-wide uppercase text-foreground mb-1">{data.title}</h3>
                <p className="font-body text-xs text-muted-foreground">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image + Text: Living */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <img src={interiorLiving} alt={pick(t.livingTitle, lang)} className="w-full aspect-[4/3] object-cover rounded" loading="lazy" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">{pick(t.livingTitle, lang)}</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
              {t.livingItems[lang].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image + Text: Attic */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="order-2 md:order-1">
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">{pick(t.atticTitle, lang)}</h3>
          <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
            {t.atticItems[lang].map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
        <img src={interiorAttic} alt={pick(t.atticTitle, lang)} className="w-full aspect-[4/3] object-cover rounded order-1 md:order-2" loading="lazy" />
      </div>

      {/* Garden */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <img src={gardenImg} alt={pick(t.gardenTitle, lang)} className="w-full aspect-[4/3] object-cover rounded" loading="lazy" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">{pick(t.gardenTitle, lang)}</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
              {t.gardenItems[lang].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">{pick(t.activitiesLabel, lang)}</p>
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-10">{pick(t.activitiesTitle, lang)}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {t.activities[lang].map((item) => (
            <div key={item} className="flex items-start gap-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
              <span className="font-body text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestHouseSection;
