import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import mainImage from "@/assets/aura-vendeghaz.jpg";
import secondaryImage from "@/assets/aura-vendeghaz-attic.jpg";
import thirdImage from "@/assets/aura-vendeghaz-e4.jpg";

const GuestHouseSection = () => {
  const lang = useLang();
  const t = translations.guestHouse;

  return (
    <section id="house" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Elegáns háttér dekorációs elem */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary opacity-40 translate-x-1/4 -skew-x-12 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* Szöveges oszlop */}
          <div className="md:col-span-5 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="font-body text-xs tracking-[0.5em] uppercase text-muted-foreground">
                {pick(t.label, lang)}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-foreground tracking-tight">
                {pick(t.title, lang)}
              </h2>
            </div>
            
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              {pick(t.description, lang)}
            </p>

            {/* Letisztult felszereltség lista */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-8 border-t border-border/60 text-left">
              {[
                { hu: "Modern kényelem", en: "Modern comfort" },
                { hu: "Balatoni nyugalom", en: "Balaton serenity" },
                { hu: "Tágas tetőtér", en: "Spacious attic" },
                { hu: "Privát kert", en: "Private garden" }
              ].map(item => (
                <div key={item.en} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary/80" />
                  <span className="font-body text-xs tracking-widest uppercase text-foreground/70">
                    {lang === "hu" ? item.hu : item.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Magazinos, aszimmetrikus képelrendezés */}
          <div className="md:col-span-7 relative">
            <div className="grid grid-cols-12 gap-4 items-end">
              
              {/* 1. Kép: Fő kép (Nagy) */}
              <div className="col-span-12 md:col-span-10 relative group overflow-hidden rounded-sm shadow-xl aspect-[16/10]">
                <img 
                  src={mainImage} 
                  alt="Aura Vendégház" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              </div>

              {/* 2. Kép: Tetőtér (Eltolva, kisebb) */}
              <div className="hidden md:block col-span-5 -mt-32 -ml-12 relative z-20 group overflow-hidden rounded-sm shadow-2xl aspect-square border-[10px] border-background">
                <img 
                  src={secondaryImage} 
                  alt="Aura Attic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* 3. Kép: Külső részlet (Jobb szélre tolva) */}
              <div className="col-span-6 md:col-span-5 md:-ml-8 relative z-10 group overflow-hidden rounded-sm shadow-lg aspect-[4/5] md:translate-y-12">
                <img 
                  src={thirdImage} 
                  alt="Aura Exterior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Dekoratív "Aura" felirat függőlegesen */}
              <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                <span className="font-display text-[10rem] font-extralight text-secondary/20 tracking-tighter rotate-90 inline-block select-none">
                  AURA
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuestHouseSection;
