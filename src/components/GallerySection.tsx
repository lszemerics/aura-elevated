import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroHouse from "@/assets/hero-house.jpg";
import galleryExterior1 from "@/assets/gallery-exterior-1.jpg";
import galleryExterior2 from "@/assets/gallery-exterior-2.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorAttic from "@/assets/interior-attic.jpg";
import gardenImg from "@/assets/garden.jpg";
import galleryBedroom1 from "@/assets/gallery-bedroom-1.jpg";
import galleryBedroom2 from "@/assets/gallery-bedroom-2.jpg";
import galleryBathroom1 from "@/assets/gallery-bathroom-1.jpg";
import galleryBathroom2 from "@/assets/gallery-bathroom-2.jpg";

type Category = "all" | "exterior" | "living" | "rooms" | "bathroom";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
  span: string; // tailwind grid span classes
}

const images: GalleryImage[] = [
  { src: heroHouse, alt: "A ház kívülről – homlokzat", category: "exterior", span: "md:col-span-2 md:row-span-2" },
  { src: galleryExterior1, alt: "A ház elölnézetből", category: "exterior", span: "md:col-span-1 md:row-span-1" },
  { src: galleryExterior2, alt: "Terasz és kert naplementében", category: "exterior", span: "md:col-span-1 md:row-span-1" },
  { src: interiorLiving, alt: "Nappali és konyha", category: "living", span: "md:col-span-2 md:row-span-1" },
  { src: interiorAttic, alt: "Tetőtér – vetítő és biliárd", category: "living", span: "md:col-span-1 md:row-span-2" },
  { src: gardenImg, alt: "Kert és grillező", category: "exterior", span: "md:col-span-1 md:row-span-1" },
  { src: galleryBedroom1, alt: "Hálószoba – francia ágy", category: "rooms", span: "md:col-span-1 md:row-span-1" },
  { src: galleryBedroom2, alt: "Hálószoba – meleg fények", category: "rooms", span: "md:col-span-1 md:row-span-1" },
  { src: galleryBathroom1, alt: "Fürdőszoba – zuhanyzó", category: "bathroom", span: "md:col-span-1 md:row-span-1" },
  { src: galleryBathroom2, alt: "Fürdőszoba – kád", category: "bathroom", span: "md:col-span-2 md:row-span-1" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "Összes" },
  { key: "exterior", label: "Kívülről" },
  { key: "living", label: "Közösségi terek" },
  { key: "rooms", label: "Szobák" },
  { key: "bathroom", label: "Fürdőszobák" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  // Keyboard navigation
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
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">Képek</p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-10">
          Galéria
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-sm border transition-colors ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Grid */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[280px]">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded cursor-pointer group ${img.span}`}
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

      {/* Lightbox */}
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
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10"
            aria-label="Bezárás"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
            aria-label="Előző"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1} />
          </button>

          {/* Image */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded animate-fade-in-slow"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors z-10"
            aria-label="Következő"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-primary-foreground/50 tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
