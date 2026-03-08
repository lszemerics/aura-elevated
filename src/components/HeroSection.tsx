import heroImage from "@/assets/aura-vendeghaz.jpg";
import exteriorImg from "@/assets/aura-vendeghaz-e1.jpg";
import livingImg from "@/assets/aura-vendeghaz-living.jpg";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const HeroSection = () => {
  const lang = useLang();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Editorial asymmetric layout */}
      <div className="container mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
          
          {/* Left text column */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-start pt-4 md:pt-12 order-2 md:order-1">
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {pick(t.subtitle, lang)}
            </p>
          </div>

          {/* Center hero image */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="Aura Vendégház – modern nyaraló Révfülöpön"
                className="w-full aspect-[4/5] md:aspect-[3/4] object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Right accent image */}
          <div className="col-span-6 md:col-span-3 order-3 pt-0 md:pt-32">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img
                src={livingImg}
                alt="Aura Vendégház belső"
                className="w-full aspect-[3/4] object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Bottom left small image */}
          <div className="col-span-6 md:col-span-2 order-4 md:-mt-24">
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <img
                src={exteriorImg}
                alt="Aura Vendégház kert"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Large title overlay */}
        <div className="relative -mt-16 md:-mt-28 z-10 text-center pointer-events-none">
          <h1 className="font-display text-7xl md:text-[10rem] lg:text-[13rem] font-light text-foreground tracking-tight leading-none animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AURA
          </h1>
          <p className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Révfülöp · Balaton
          </p>
          <p className="font-display text-base md:text-xl text-foreground/80 tracking-[0.3em] uppercase mt-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {pick(t.type, lang)}
          </p>
        </div>

        {/* Booking CTA */}
        <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://www.airbnb.hu/rooms/1591647579928631355"
            target="_blank"
            rel="noopener"
            className="font-body text-xs tracking-[0.3em] uppercase border-b border-foreground pb-1 text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            [ {lang === "hu" ? "online foglalás" : "book online"} ]
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
