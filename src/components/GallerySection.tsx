import { useState, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

// --- Assets ---
import heroHouse from "@/assets/aura-vendeghaz.jpg";
import galleryExterior1 from "@/assets/aura-vendeghaz-e1.jpg";
import galleryExterior2 from "@/assets/aura-vendeghaz-e2.jpg";
import galleryExterior3 from "@/assets/aura-vendeghaz-e3.jpg";
import galleryExterior4 from "@/assets/aura-vendeghaz-e4.jpg";
import galleryExterior5 from "@/assets/aura-vendeghaz-e5.jpg";
import interiorLiving from "@/assets/aura-vendeghaz-living.jpg";
import interiorAttic from "@/assets/aura-vendeghaz-attic.jpg";
import galleryBedroom1 from "@/assets/aura-vendeghaz-h1.jpg";
import galleryBedroom2 from "@/assets/aura-vendeghaz-h2.jpg";
import galleryBedroom3 from "@/assets/aura-vendeghaz-h3.jpg";
import galleryBedroom4 from "@/assets/aura-vendeghaz-h4.jpg";
import galleryLiving2 from "@/assets/aura-vendeghaz-l2.jpg";
import galleryLiving4 from "@/assets/aura-vendeghaz-l4.jpg";
import galleryBathroom1 from "@/assets/aura-vendeghaz-wc-1.jpg";
import galleryBathroom2 from "@/assets/aura-vendeghaz-wc-2.jpg";

type Category = "all" | "exterior" | "living" | "rooms" | "bathroom";

const imageSources = [
  { src: heroHouse, category: "exterior" as const },
  { src: galleryExterior1, category: "exterior" as const },
  { src: galleryExterior2, category: "exterior" as const },
  { src: galleryExterior3, category: "exterior" as const },
  { src: galleryExterior4, category: "exterior" as const },
  { src: galleryExterior5, category: "exterior" as const },
  { src: interiorLiving, category: "living" as const },
  { src: interiorAttic, category: "living" as const },
  { src: galleryLiving2, category: "living" as const },
  { src: galleryLiving4, category: "living" as const },
  { src: galleryBedroom1, category: "rooms" as const },
  { src: galleryBedroom2, category: "rooms" as const },
  { src: galleryBedroom3, category: "rooms" as const },
  { src: galleryBedroom4, category: "rooms" as const },
  { src: galleryBathroom1, category: "bathroom" as const },
  { src: galleryBathroom2, category: "bathroom" as const },
];

const categoryKeys: Category[] = ["all", "exterior", "living", "rooms", "bathroom"];

// Ez a függvény határozza meg a vizuális ritmust
const getGridClass = (index: number) => {
  const layouts = [
    "md:col-span-8 md:h-[650px] col-span-2 h-[350px]", // Kiemelt nagy kép
    "md:col-span-4 md:h-[450px] col-span-1 h-[250px] self-end", // Kicsi eltolt
    "md:col-span-4 md:h-[550px] col-span-1 h-[250px]", 
    "md:col-span-5 md:h-[400px] col-span-2 h-[300px] md:ml-12", // Fehér térrel eltolva
    "md:col-span-3 md:h-[350px] col-span-1 h-[200px] mt-[-40px] md:mt-0", // Átfedés érzet
    "md:col-span-6 md:h-[500px] col-span-2 h-[350px]",
    "md:col-span-6 md:h-[500px] col-span-1 h-[250px]",
    "md:col-span-12 md:h-[750px] col-span-2 h-[400px]", // Széles panoráma
  ];
  return layouts[index % layouts.length];
};

const GallerySection = () => {
  const lang = useLang();
  const t = translations.gallery;
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo(() => imageSources.map((img, i) => ({
    ...img,
    alt: pick(t.imageAlts[i], lang),
  })), [lang, t.imageAlts]);

  const filtered = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="gallery" className="bg-[#fcfcfc] py-20 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header - Architectural Minimal */}
        <div className="mb-16 md:mb-32">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase text-gray-400 mb-4 block animate-fade-in">
            {pick(t.label, lang)}
          </p>
          <h2 className="font-display text-4xl md:text-7xl font-extralight tracking-tighter text-black mb-12">
            {pick(t.title, lang)}
          </h2>

          {/* Szűrő - Mobilon vízszintesen görgethető, hogy ne törjön szét */}
          <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-100 no-scrollbar">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`font-body text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-500 relative py-2 ${
                  activeCategory === key
                    ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {pick(t.categories[key], lang)}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-12 items-start">
          {filtered.map((img, i) => (
            <div
              key={typeof img.src === 'string' ? img.src : img.src.src}
              className={`relative overflow-hidden cursor-crosshair group bg-gray-100 ${getGridClass(i)}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={typeof img.src === 'string' ? img.src : img.src.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-[1.2s] ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              {/* Desktop Hover Info */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hidden md:block">
                <span className="font-body text-[9px] text-white tracking-[0.4em] uppercase bg-black/30 backdrop-blur-md px-4 py-2">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - Minimal White Gallery Look */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
          onClick={closeLightbox}
        >
          <button className="absolute top-10 right-10 text-black hover:rotate-90 transition-transform duration-500 z-50">
            <X className="w-8 h-8 font-thin" />
          </button>
          
          <button onClick={goPrev} className="absolute left-6 md:left-12 text-black/20 hover:text-black transition-colors hidden sm:block">
            <ChevronLeft className="w-16 h-16" strokeWidth={0.5} />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
             <img
              src={typeof filtered[lightboxIndex].src === 'string' ? filtered[lightboxIndex].src : filtered[lightboxIndex].src.src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-12 text-center space-y-2">
              <p className="font-display text-lg tracking-widest text-black uppercase">
                 {filtered[lightboxIndex].alt}
              </p>
              <p className="font-body text-[10px] tracking-[0.3em] text-gray-400">
                 {lightboxIndex + 1} &mdash; {filtered.length}
              </p>
            </div>
          </div>

          <button onClick={goNext} className="absolute right-6 md:right-12 text-black/20 hover:text-black transition-colors hidden sm:block">
            <ChevronRight className="w-16 h-16" strokeWidth={0.5} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
