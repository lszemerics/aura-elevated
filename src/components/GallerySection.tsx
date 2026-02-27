import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { translations, pick } from "@/lib/translations";

import heroHouse from "@/assets/aura-vendeghaz-nyito.jpg";
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

// Returns span classes based on position within the filtered set
function getSpan(index: number, total: number): string {
  if (total <= 3) return index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  if (total === 4) return index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  if (total <= 6) {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    return "md:col-span-1 md:row-span-1";
  }
  // 7+ images: first one large, rest fill naturally
  if (index === 0) return "md:col-span-2 md:row-span-2";
  if (index === 5) return "md:col-span-2 md:row-span-1";
  return "md:col-span-1 md:row-span-1";
}

const categoryKeys: Category[] = ["all", "exterior", "living", "rooms", "bathroom"];

const GallerySection = () => {
  const lang = useLang();
  const t = translations.gallery;
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = imageSources.map((img, i) => ({
    ...img,
    alt: pick(t.imageAlts[i], lang),
  }));

  const filtered = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    },
    [goNext, goPrev]
  );

  return (
    <section id="gallery" className="pt-24">
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">{pick(t.label, lang)}</p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-10">
          {pick(t.title, lang)}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-sm border transition-colors ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {pick(t.categories[key], lang)}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-dense gap-3 auto-rows-[280px]">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded cursor-pointer group ${getSpan(i, filtered.length)}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-body text-xs text-primary-foreground tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          ref={(el) => el?.focus()}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10"
            aria-label={lang === "hu" ? "Bezárás" : "Close"}
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
            aria-label={lang === "hu" ? "Előző" : "Previous"}
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded animate-fade-in-slow"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
            aria-label={lang === "hu" ? "Következő" : "Next"}
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1} />
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-primary-foreground/50 tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
