import { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuestHouseSection from "@/components/GuestHouseSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";
import { useLocation, useNavigate } from "react-router-dom";

type Section = "house" | "gallery";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("house");
  const [lang, setLang] = useState<Lang>("hu");
  const location = useLocation();
  const navigate = useNavigate();
  const isProgrammaticScrollRef = useRef(false);

  const handleSectionChange = useCallback((section: Section) => {
    const el = document.getElementById(section);
    if (!el) return;

    isProgrammaticScrollRef.current = true;
    setActiveSection(section);

    const headerOffset = 64;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });

    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const requestedSection = (location.state as { scrollTo?: Section } | null)?.scrollTo;
    if (!requestedSection) return;

    let rafId = 0;
    let retries = 0;

    const scrollWhenReady = () => {
      const target = document.getElementById(requestedSection);
      if (target) {
        handleSectionChange(requestedSection);
        navigate(location.pathname, { replace: true, state: null });
        return;
      }

      if (retries < 20) {
        retries += 1;
        rafId = requestAnimationFrame(scrollWhenReady);
      } else {
        navigate(location.pathname, { replace: true, state: null });
      }
    };

    rafId = requestAnimationFrame(scrollWhenReady);

    return () => cancelAnimationFrame(rafId);
  }, [handleSectionChange, location.pathname, location.state, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const gallerySection = document.getElementById("gallery");
      const scrollPos = window.scrollY + 120;

      if (gallerySection && scrollPos >= gallerySection.offsetTop) {
        setActiveSection("gallery");
      } else {
        setActiveSection("house");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LangProvider value={lang}>
      <div className="min-h-screen bg-background">
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} lang={lang} onLangChange={setLang} />
        <main>
          <HeroSection />
          <GuestHouseSection />
          <GallerySection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Index;

