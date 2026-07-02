import { useState, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

// --- ALAPVETŐ STATIKUS IMPORTOK ---
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

// --- LOVABLE METADAT IMPORTOK (.asset.json) ---
import koz12 from "@/assets/aura-vendeghaz-koz_12.jpg.asset.json";
import koz13 from "@/assets/aura-vendeghaz-koz_13.jpg.asset.json";
import koz14 from "@/assets/aura-vendeghaz-koz_14.jpg.asset.json";
import koz15 from "@/assets/aura-vendeghaz-koz_15.jpg.asset.json";
import koz16 from "@/assets/aura-vendeghaz-koz_16.jpg.asset.json";
import koz1 from "@/assets/aura-vendeghaz-koz_1.jpg.asset.json";
import koz10 from "@/assets/aura-vendeghaz-koz_10.jpg.asset.json";
import koz3 from "@/assets/aura-vendeghaz-koz_3.jpg.asset.json";
import koz11 from "@/assets/aura-vendeghaz-koz_11.jpg.asset.json";
import koz5 from "@/assets/aura-vendeghaz-koz_5.jpg.asset.json";
import koz6 from "@/assets/aura-vendeghaz-koz_6.jpg.asset.json";
import koz7 from "@/assets/aura-vendeghaz-koz_7.jpg.asset.json";
import koz8 from "@/assets/aura-vendeghaz-koz_8.jpg.asset.json";
import koz4 from "@/assets/aura-vendeghaz-koz_4.jpg.asset.json";
import koz9 from "@/assets/aura-vendeghaz-koz_9.PNG.asset.json";
import koz2 from "@/assets/aura-vendeghaz-koz_2.JPG.asset.json";
import deliSzoba1 from "@/assets/aura-vendeghaz-deli_szoba_1.jpg.asset.json";
import deliSzoba2 from "@/assets/aura-vendeghaz-deli_szoba_2.jpg.asset.json";

type Category = "all" | "exterior" | "living" | "rooms" | "bathroom";

// Segédfüggvény, ami biztonságosan kinyeri a képlinket a JSON objektumokból
const resolveSrc = (asset: any): string => {
  if (!asset) return "";
  if (typeof asset === "string") return asset;
  if (asset.url) return asset.url;
  if (asset.src) return asset.src;
  if (asset.default) return typeof asset.default === "string" ? asset.default : asset.default.url || asset.default.src || "";
  return "";
};

const imageSources = [
  { src: resolveSrc(heroHouse), category: "exterior" as const },
  { src: resolveSrc(galleryExterior1), category: "exterior" as const },
  { src: resolveSrc(galleryExterior2), category: "exterior" as const },
  { src: resolveSrc(galleryExterior3), category: "exterior" as const },
  { src: resolveSrc(galleryExterior4), category: "exterior" as const },
  { src: resolveSrc(galleryExterior5), category: "exterior" as const },
  { src: resolveSrc(interiorLiving), category: "living" as const },
  { src: resolveSrc(interiorAttic), category: "living" as const },
  { src: resolveSrc(galleryLiving2), category: "living" as const },
  { src: resolveSrc(galleryLiving4), category: "living" as const },
  
  // 1. Blokkrész: Közösségi terek (12, 13, 14, 15, 16)
  { src: resolveSrc(koz12), category: "living" as const },
  { src: resolveSrc(koz13), category: "living" as const },
  { src: resolveSrc(koz14), category: "living" as const },
  { src: resolveSrc(koz15), category: "living" as const },
  { src: resolveSrc(koz16), category: "living" as const },
  
  // 2. Blokkrész: Közösségi terek (5, 6, 7, 8, 9, 2, 4)
  { src: resolveSrc(koz5), category: "living" as const },
  { src: resolveSrc(koz6), category: "living" as const },
  { src: resolveSrc(koz7), category: "living" as const },
  { src: resolveSrc(koz8), category: "living" as const },
  { src: resolveSrc(koz9), category: "living" as const },
  { src: resolveSrc(koz2), category: "living" as const },
  { src: resolveSrc(koz4), category: "living" as const },
  
  // 3. Blokkrész: Közösségi terek (1, 10, 3, 11)
  { src: resolveSrc(koz1), category: "living" as const },
  { src: resolveSrc(koz10), category: "living" as const },
  { src: resolveSrc(koz3), category: "living" as const },
  { src: resolveSrc(koz11), category: "living" as const },

  // Szobák szekció
  { src: resolveSrc(galleryBedroom1), category: "rooms" as const },
  { src: resolveSrc(galleryBedroom2), category: "rooms" as const },
  { src: resolveSrc(galleryBedroom3), category: "rooms" as const },
  { src: resolveSrc(galleryBedroom4), category: "rooms" as const },
  
  // Déli szobák
  { src: resolveSrc(deliSzoba1), category: "rooms" as const },
  { src: resolveSrc(deliSzoba2), category: "rooms" as const },

  // Fürdőszobák
  { src: resolveSrc(galleryBathroom1), category: "bathroom" as const },
  { src: resolveSrc(galleryBathroom2), category: "bathroom" as const },
];

const categoryKeys: Category[] = ["all", "exterior", "living", "rooms", "bathroom"];

const GallerySection = () => {
  const lang = useLang();
  const t = translations.gallery;
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo(() => imageSources.map((img, i) => ({
    ...img,
    alt: pick(t.imageAlts[i], lang) || "Aura Vendégház",
  })), [lang, t.imageAlts]);

  const filtered = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  const getDesktopSpan = (index: number) => {
    const patterns = [
      "md:col-span-8 md:h-[500px]", 
      "md:col-span-4 md:h-[500px]", 
      "md:col-span-4 md:h-[400px]", 
      "md:col-span-8 md:h-[400px]",
      "md:col-span-6 md:h-[450px]", 
      "md:col-span-6 md:h-[450px]"
    ];
    return patterns[index % patterns.length];
  };

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
    <section id="gallery" className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-4 text-center md:text-left">
            {pick(t.label, lang)}
          </p>
          <h2 className="font-display text-3xl md:text-6xl font-light tracking-tight text-black mb-10 text-center md:text-left">
             {pick(t.title, lang)}
          </h2>
          
          {/* Filters */}
          <div className="flex overflow-x-auto md:overflow-visible no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-6 border-b border-gray-100 pb-4">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`whitespace-nowrap font-body text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 py-2 ${
                  activeCategory === key ? "text-black border-b border-black" : "text-gray-400 hover:text-black"
                }`}
              >
                {pick(t.categories[key], lang)}
              </button>
            ))}
          </div>
        </div>

        {/* Galéria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`relative overflow-hidden cursor-pointer group h-[300px] md:h-auto ${getDesktopSpan(i)}`}
              onClick={() => openLightbox(i)}
            >
              {img.src && (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-white backdrop-blur-xl flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 p-2 text-black transition-transform hover:rotate-90">
            <X className="w-8 h-8" strokeWidth={1} />
          </button>
          
          <button onClick={goPrev} className="absolute left-4 md:left-10 text-black/20 hover:text-black transition-colors">
            <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={0.5} />
          </button>

          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <button onClick={goNext} className="absolute right-4 md:right-10 text-black/20 hover:text-black transition-colors">
            <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={0.5} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
