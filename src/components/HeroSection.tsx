import heroImage from "@/assets/aura-vendeghaz-nyitokep.jpg";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

const HeroSection = () => {
  const lang = useLang();
  const t = translations.hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Aura Vendégház – modern nyaraló Révfülöpön"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-primary-foreground/80 mb-4 animate-fade-in-slow">
          Révfülöp · Balaton
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AURA
        </h1>
        <p className="font-display text-lg md:text-2xl text-primary-foreground/90 tracking-[0.3em] uppercase mt-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {pick(t.type, lang)}
        </p>
        <div className="mt-8 w-12 h-px bg-primary-foreground/50 animate-fade-in" style={{ animationDelay: "0.6s" }} />
        <p className="font-body text-sm text-primary-foreground/70 mt-4 max-w-md animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {pick(t.subtitle, lang)}
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-px h-12 bg-primary-foreground/40 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
