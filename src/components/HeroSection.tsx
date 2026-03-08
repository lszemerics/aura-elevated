import mainHero from "@/assets/aura-vendeghaz.jpg";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const HeroSection = () => {
  const lang = useLang();
  const t = translations.hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={mainHero}
          alt="Aura Vendégház"
          className="w-full h-full object-cover scale-105"
          loading="eager" />
        
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {/* Top — location tag */}
        <div className="flex justify-between items-start pt-16">
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/70">
              Révfülöp · Balaton · Hungary
            </p>
          </div>
          <a
            href="https://www.airbnb.hu/rooms/1591647579928631355"
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden border border-white/40 hover:border-white/80 transition-all duration-500 animate-fade-in"
            style={{ animationDelay: "0.6s" }}>
            
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative font-body text-[11px] tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors duration-500">
              {lang === "hu" ? "Foglalás" : "Book Now"}
            </span>
          </a>
        </div>

        {/* Center — immersive title */}
        <div className="flex-1 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-light tracking-tight leading-[0.9] text-white md:text-8xl">
              AURA
            </h1>
            <div className="w-16 h-[1px] bg-white/40 mx-auto" />
            <p className="font-display text-lg sm:text-xl md:text-2xl font-light text-white/80 tracking-wide">
              {pick(t.type, lang)}
            </p>
          </div>
        </div>

        {/* Bottom — subtitle + scroll hint */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="font-body text-sm md:text-base text-white/60 leading-relaxed max-w-md tracking-wide">
            {pick(t.subtitle, lang)}
          </p>

          <div className="flex items-center gap-4 text-[9px] tracking-[0.4em] uppercase text-white/50 shrink-0">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="animate-pulse">
              {lang === "hu" ? "Görgess" : "Scroll"}
            </span>
          </div>
        </div>
      </div>
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-20" />
    </section>);

};

export default HeroSection;