import { useState } from "react";
import interiorLiving from "@/assets/aura-vendeghaz-living.jpg";
import interiorAttic from "@/assets/aura-vendeghaz-attic.jpg";
import gardenImg from "@/assets/aura-vendeghaz-garden.jpg";
import { Bed, Snowflake, Baby, Trees, Wifi, Car, UtensilsCrossed, Tv, Flame, Banknote } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

// Az első helyre beszúrtuk a Banknote (Ár) ikont
const featureIcons = [Banknote, Bed, Snowflake, Baby, Trees, Wifi, Car, UtensilsCrossed, Tv, Flame];

const GuestHouseSection = () => {
  const lang = useLang();
  const t = translations.house;

  // Összeállítjuk a megjelenítendő elemek listáját
  let displayFeatures = [];

  // 1. Első lépésként manuálisan beszúrjuk az ÁR kártyát a legelső helyre
  displayFeatures.push({
    hu: { title: "ÁR", desc: "160 000 Ft / éj / teljes ház (Újévkor egyedi ár)" },
    en: { title: "PRICE", desc: "160 000 HUF / night / entire house (Custom price for New Year)" }
  });

  // 2. Utána hozzáfűzzük a translations fájlból jövő alapértelmezett elemeket
  if (t.features && Array.isArray(t.features)) {
    displayFeatures = [...displayFeatures, ...t.features];
  }

  // 3. Biztonsági ellenőrzés: ha a Szauna még nem lenne benne a translations.ts-ben, manuálisan rátesszük a végére
  const hasSauna = displayFeatures.some(f => {
    const data = f[lang] || f;
    return data.title?.toUpperCase() === "SZAUNA" || data.title?.toUpperCase() === "SAUNA";
  });

  if (!hasSauna) {
    displayFeatures.push({
      hu: { title: "SZAUNA", desc: "6 fő részére" },
      en: { title: "SAUNA", desc: "For 6 people" }
    });
  }

  // 4. PRÉMIUM VIZUÁLIS EGYENSÚLY: 10 elemed van, de 4 oszlopos rácsban dolgozunk (3x4 = 12 elem kell).
  // Feltöltjük üres, minimalista placeholder kártyákkal a rács végét, hogy ne legyen aszimmetrikus törés.
  while (displayFeatures.length < 12) {
    displayFeatures.push({ isPlaceholder: true });
  }

  return (
    <section id="house" className="pt-12">
      {/* Story intro - editorial style */}
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-8">
          {pick(t.sectionLabel, lang)}
        </p>
        
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-10">
          {pick(t.heading1, lang)}<br />
          <span className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
            {pick(t.heading2, lang)}
          </span>
        </h2>
        
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          {pick(t.intro, lang)}
        </p>
      </div>

      {/* Feature Grid - Újra 4 oszlopos (md:grid-cols-4) a tökéletes 12-es mátrix elrendezésért */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {displayFeatures.map((f, i) => {
            // Ha ez egy üres dizájn-helyörző kártya a szimmetria kedvéért
            if (f.isPlaceholder) {
              return (
                <div key={`space-${i}`} className="hidden md:block p-6 bg-card/10 border border-border/20 opacity-30 pointer-events-none" />
              );
            }

            const Icon = featureIcons[i];
            const data = f[lang] || f;
            
            return (
              <div key={i} className="text-center p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 group flex flex-col justify-center items-center min-h-[140px]">
                {Icon && <Icon className="w-5 h-5 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />}
                <h3 className="font-body text-xs font-semibold tracking-wider uppercase text-foreground mb-1">{data.title}</h3>
                
                {/* Sortörések és zárójelek formázása az árhoz */}
                <p className="font-body text-[11px] text-muted-foreground whitespace-pre-line max-w-[180px] mx-auto leading-normal">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Living - full-bleed editorial */}
      <div className="bg-secondary/60">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <img src={interiorLiving} alt={pick(t.livingTitle, lang)} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-5">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{lang === "hu" ? "az érzés" : "the feeling"}</p>
              <h3 className="font-display text-2xl md:text-4xl font-light text-foreground mb-8">{pick(t.livingTitle, lang)}</h3>
              <ul className="font-body text-sm text-muted-foreground space-y-4 leading-relaxed">
                {t.livingItems[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Attic - reversed editorial */}
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{lang === "hu" ? "a tér" : "the space"}</p>
            <h3 className="font-display text-2xl md:text-4xl font-light text-foreground mb-8">{pick(t.atticTitle, lang)}</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-4 leading-relaxed">
              {t.atticItems[lang].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <img src={interiorAttic} alt={pick(t.atticTitle, lang)} className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Garden */}
      <div className="bg-secondary/60">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7">
              <img src={gardenImg} alt={pick(t.gardenTitle, lang)} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-5">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{lang === "hu" ? "a kert" : "the garden"}</p>
              <h3 className="font-display text-2xl md:text-4xl font-light text-foreground mb-8">{pick(t.gardenTitle, lang)}</h3>
              <ul className="font-body text-sm text-muted-foreground space-y-4 leading-relaxed">
                {t.gardenItems[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6">{pick(t.activitiesLabel, lang)}</p>
        <h3 className="font-display text-2xl md:text-4xl font-light text-foreground mb-12">{pick(t.activitiesTitle, lang)}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          {t.activities[lang].map((item) => (
            <div key={item} className="flex items-start gap-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="font-body text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestHouseSection;
