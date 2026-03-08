import mainHero from "@/assets/aura-vendeghaz.jpg";
import atticImg from "@/assets/aura-vendeghaz-attic.jpg";
import exteriorImg from "@/assets/aura-vendeghaz-e4.jpg";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const HeroSection = () => {
  const lang = useLang();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fdfdfd] flex items-center">
      {/* Háttérben úszó hatalmas felirat - elegáns mélység */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="font-display text-[22vw] font-light text-secondary/30 tracking-tighter leading-none select-none opacity-40 animate-fade-in">
          AURA
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full py-12">
        <div className="grid grid-cols-12 gap-6 items-center">
          
          {/* 1. BAL OLDAL: Szöveg és az E4-es külső kép */}
          <div className="col-span-12 lg:col-span-3 order-2 lg:order-1 flex flex-col gap-10">
            <div className="space-y-6 max-w-xs animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-10 h-[1px] bg-foreground/40" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic tracking-wide">
                {pick(t.subtitle, lang)}
              </p>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/80 space-y-1">
                <p>Révfülöp · Balaton</p>
                <p>Est. 2024</p>
              </div>
            </div>

            <div className="hidden lg:block w-full aspect-[4/5] overflow-hidden rounded-sm shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 group">
              <img 
                src={exteriorImg} 
                alt="Exterior detail" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
            </div>
          </div>

          {/* 2. KÖZÉP: A fő kép egyedi maszkkal */}
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <div className="relative z-20 px-4 lg:px-8 animate-fade-in">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[120px] shadow-2xl">
                <img
                  src={mainHero}
                  alt="Aura Vendégház"
                  className="w-full h-full object-cover transform scale-105"
                  loading="eager"
                />
                {/* Alsó lágy átmenet a kép és a háttér között */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdfdfd] via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Típus felirat lebegő hatással */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-4 shadow-lg">
                <p className="font-display text-sm tracking-[0.5em] uppercase text-foreground whitespace-nowrap">
                  {pick(t.type, lang)}
                </p>
              </div>
            </div>
          </div>

          {/* 3. JOBB OLDAL: Attic (tetőtér) kép és a foglalás */}
          <div className="col-span-12 lg:col-span-3 order-3 flex flex-col justify-between h-full min-h-[450px] pt-12 lg:pt-0 lg:text-right">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-sm shadow-lg translate-y-4 hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src={atticImg} 
                alt="Attic interior" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex flex-col items-center lg:items-end gap-10">
              <a
                href="https://www.airbnb.hu/rooms/1591647579928631355"
                target="_blank"
                rel="noopener"
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden border border-foreground transition-all duration-500"
              >
                <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative font-body text-xs tracking-[0.3em] uppercase group-hover:text-background transition-colors duration-500">
                  {lang === "hu" ? "Foglalás" : "Book Now"}
                </span>
              </a>

              <div className="flex items-center gap-4 text-[9px] tracking-[0.4em] uppercase text-muted-foreground rotate-0 lg:rotate-90 origin-right lg:-translate-y-12">
                <span className="animate-pulse">Scroll to explore</span>
                <div className="w-12 h-[1px] bg-muted-foreground/40" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
