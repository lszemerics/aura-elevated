import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";
import exteriorPath from "@/assets/aura-vendeghaz-e1.jpg"; // Használjuk az egyik külső képet
import livingRoomPath from "@/assets/aura-vendeghaz-living.jpg"; // És egy belsőt

const GuestHouseSection = () => {
  const lang = useLang();
  const t = translations.house;

  return (
    <section id="house" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Háttér dekorációs elem (opcionális, de elegáns) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-50 translate-x-1/4 -skew-x-12 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Szöveges oszlop (balra) */}
          <div className="md:col-span-5 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
                {pick(t.label, lang)}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-foreground tracking-tight">
                {pick(t.title, lang)}
              </h2>
            </div>
            
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              {pick(t.description, lang)}
            </p>

            {/* Felszereltség lista - Modernebb, ikonok nélküli elrendezésben */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-border/50">
              {[
                "Modern kényelem", 
                "Balatoni nyugalom", 
                "Tágas terek", 
                "Csendes környezet"
              ].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="font-body text-sm text-foreground/80 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Képes oszlop (jobbra) - Ez a lényeg! */}
          <div className="md:col-span-7 relative">
            <div className="grid grid-cols-6 gap-4 items-end">
              
              {/* Nagy, domináns kép - Enyhe sötétítéssel */}
              <div className="col-span-6 md:col-span-5 relative group overflow-hidden rounded-sm shadow-xl aspect-[4/3]">
                <img 
                  src={exteriorPath} 
                  alt="Aura Vendégház Kívülről" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Lágy átmenet a kép alján és bal oldalán */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-80" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/10 to-transparent opacity-60" />
              </div>

              {/* Kisebb, eltolt kép (Aszimmetria) */}
              <div className="col-span-3 md:col-span-3 md:-ml-24 md:-mb-16 relative z-20 group overflow-hidden rounded-sm shadow-2xl aspect-[3/4] border-4 border-background">
                <img 
                  src={livingRoomPath} 
                  alt="Aura Vendégház Nappali" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Lágy sötétítés */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Dekoratív szöveg eltolva (Lifestyle elem, mint a mintán) */}
              <div className="hidden md:block col-span-3 md:col-span-2 text-right self-end -mb-16 -mr-8">
                <p className="font-display text-7xl font-extralight text-secondary tracking-tighter opacity-70 rotate-90 origin-bottom-right">
                  Relax
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuestHouseSection;
