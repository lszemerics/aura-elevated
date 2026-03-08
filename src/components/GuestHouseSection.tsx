import { useLang } from "@/lib/i18n";
import mainImage from "@/assets/aura-vendeghaz.jpg";
import secondaryImage from "@/assets/aura-vendeghaz-attic.jpg";
import thirdImage from "@/assets/aura-vendeghaz-e4.jpg";

const GuestHouseSection = () => {
  const lang = useLang();

  // Fix szövegek, hogy ne legyen "t is undefined" hiba
  const content = {
    hu: {
      label: "A VENDÉGHÁZ",
      title: "Modern kényelem a Balatonnál",
      description: "Fedezze fel a stílus és a nyugalom tökéletes egyensúlyát. Vendégházunk minden szegletét úgy alakítottuk ki, hogy felejthetetlen élményt nyújtson a pihenésre vágyóknak.",
      items: ["Modern kényelem", "Balatoni nyugalom", "Tágas tetőtér", "Privát kert"]
    },
    en: {
      label: "THE GUEST HOUSE",
      title: "Modern Comfort at Balaton",
      description: "Discover the perfect balance of style and tranquility. Every corner of our guest house has been designed to provide an unforgettable experience for those seeking relaxation.",
      items: ["Modern comfort", "Balaton serenity", "Spacious attic", "Private garden"]
    }
  };

  const t = lang === "en" ? content.en : content.hu;

  return (
    <section id="house" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary opacity-40 translate-x-1/4 -skew-x-12 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          <div className="md:col-span-5 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="font-body text-xs tracking-[0.5em] uppercase text-muted-foreground">
                {t.label}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-foreground tracking-tight">
                {t.title}
              </h2>
            </div>
            
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.description}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-8 border-t border-border/60 text-left">
              {t.items.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary/80" />
                  <span className="font-body text-xs tracking-widest uppercase text-foreground/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 relative">
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-12 md:col-span-10 relative group overflow-hidden rounded-sm shadow-xl aspect-[16/10]">
                <img 
                  src={mainImage} 
                  alt="Aura" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              </div>

              <div className="hidden md:block col-span-5 -mt-32 -ml-12 relative z-20 group overflow-hidden rounded-sm shadow-2xl aspect-square border-[10px] border-background">
                <img 
                  src={secondaryImage} 
                  alt="Aura" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="col-span-6 md:col-span-5 md:-ml-8 relative z-10 group overflow-hidden rounded-sm shadow-lg aspect-[4/5] md:translate-y-12">
                <img 
                  src={thirdImage} 
                  alt="Aura" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

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
