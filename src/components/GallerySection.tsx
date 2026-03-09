import { useState, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

// --- Az összes importod változatlan marad ---
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
  { src: heroHouse.src, category: "exterior" as const },
  { src: galleryExterior1.src, category: "exterior" as const },
  { src: galleryExterior2.src, category: "exterior" as const },
  { src: galleryExterior3.src, category: "exterior" as const },
  { src: galleryExterior4.src, category: "exterior" as const },
  { src: galleryExterior5.src, category: "exterior" as const },
  { src: interiorLiving.src, category: "living" as const },
  { src: interiorAttic.src, category: "living" as const },
  { src: galleryLiving2.src, category: "living" as const },
  { src: galleryLiving4.src, category: "living" as const },
  { src: galleryBedroom1.src, category: "rooms" as const },
  { src: galleryBedroom2.src, category: "rooms" as const },
  { src: galleryBedroom3.src, category: "rooms" as const },
  { src: galleryBedroom4.src, category: "rooms" as const },
  { src: galleryBathroom1.src, category: "bathroom" as const },
  { src: galleryBathroom2.src, category: "bathroom" as const },
];

// Aszimmetrikus layout mintázat (ismétlődő)
const layoutPattern = [
  "md:col-span-8 md:h-[600px]", 
  "md:col-span-4 md:h-[400px] self-end", 
  "md:col-span-4 md:h-[500px]", 
  "md:col-span-5 md:h-[400px]", 
  "md:col-span-3 md:h-[300px] mt-[-50px]", 
  "md:col-span-6 md:h-[550px]", 
  "md:col-span-6 md:h-[450px]",
  "md:col-span-12 md:h-[700px]"
];

const categoryKeys: Category[] = ["all", "exterior", "living", "rooms", "bathroom"];

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
    <section id="gallery" className="bg-[#fdfdfd] py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header - Minimalista, építészeti fókusz */}
        <div className="mb-20 space-y-4">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gray-400">
            {pick(t.label, lang)}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tighter text-black">
             {pick(t.title, lang)}
          </h2>
          
          {/* Szűrők - Letisztultabb gombok */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-all duration-500 relative py-2 ${
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

        {/* Gallery Grid - Masonry-like aszimmetria */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {filtered.map((img, i) => {
            const spanClass = layoutPattern[i % layoutPattern.length];
            return (
              <div
                key={img.src}
                className={`relative overflow-hidden cursor-crosshair group bg-gray-50 ${spanClass}`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-[1.5s] cubic-bezier(0.4, 0, 0.2, 1) grayscale group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Minimalista felirat csak hover-re */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="font-body text-[9px] text-white tracking-[0.3em] uppercase bg-black/40 backdrop-blur-sm px-3 py-1.5">
                    {img.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox - Sötétebb, elegánsabb fókusz */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button className="absolute top-8 right-8 text-black hover:rotate-90 transition-transform duration-300">
            <X className="w-8 h-8 font-thin" />
          </button>
          
          <button onClick={goPrev} className="absolute left-8 hidden md:block text-black/30 hover:text-black transition-colors">
            <ChevronLeft className="w-12 h-12" strokeWidth={0.5} />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center">
             <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute -bottom-12 left-0 font-body text-[10px] tracking-[0.2em] text-gray-400 uppercase">
               {filtered[lightboxIndex].alt} — {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          <button onClick={goNext} className="absolute right-8 hidden md:block text-black/30 hover:text-black transition-colors">
            <ChevronRight className="w-12 h-12" strokeWidth={0.5} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
