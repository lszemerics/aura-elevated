import floorplanGround from "@/assets/aura-vendeghaz-floorplan-ground.jpg";
import floorplanAttic from "@/assets/aura-vendeghaz-floorplan-attic.png";
import propertyMap from "@/assets/aura-vendeghaz-property-map.jpg";
import { Clock, Key, Home, CigaretteOff, Volume2, PawPrint, Flame, Trash2, Zap, Shield, Phone, Thermometer } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const ruleIcons = [Clock, Key, Home, CigaretteOff, Volume2, PawPrint, Flame, Trash2, Zap, Thermometer, Shield, Phone];

const HouseRulesSection = () => {
  const lang = useLang();
  const t = translations.rules;

  return (
    <section id="rules" className="pt-24">
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {pick(t.sectionLabel, lang)}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-4">
          {pick(t.title, lang)}
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
          {pick(t.subtitle, lang)}
        </p>
      </div>

      {/* Rules Grid */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.cards.map((card, i) => {
            const Icon = ruleIcons[i];
            const data = card[lang];
            return (
              <div key={i} className="p-6 bg-card rounded border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="font-body text-sm font-semibold tracking-wide uppercase text-foreground">{data.title}</h3>
                </div>
                <ul className="space-y-2">
                  {data.items.map((item, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floor Plans */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-5xl">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6 text-center">
            {pick(t.floorplansLabel, lang)}
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-12 text-center">
            {pick(t.floorplansTitle, lang)}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">{pick(t.groundFloor, lang)}</p>
              <img src={floorplanGround} alt={pick(t.groundFloor, lang)} className="w-full rounded border border-border bg-background p-2" loading="lazy" />
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">{pick(t.attic, lang)}</p>
              <img src={floorplanAttic} alt={pick(t.attic, lang)} className="w-full rounded border border-border bg-background p-2" loading="lazy" />
            </div>
          </div>
          <div className="mt-12">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">{pick(t.propertyMap, lang)}</p>
            <img src={propertyMap} alt={pick(t.propertyMap, lang)} className="w-full max-w-lg mx-auto rounded border border-border bg-background p-2" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Important notes */}
      <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {pick(t.seasonNote, lang)}
        </p>
      </div>
    </section>
  );
};

export default HouseRulesSection;
