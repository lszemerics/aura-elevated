import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuestHouseSection from "@/components/GuestHouseSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";
import { useLocation, useNavigate } from "react-router-dom";

type Section = "house" | "gallery" | "rules";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("house");
  const [lang, setLang] = useState<Lang>("hu");
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false);

  const handleSectionChange = (section: Section) => {
    const el = document.getElementById(section === "house" ? "hero" : section);
    if (el) {
      isScrollingRef.current = true;
      setActiveSection(section);
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });

      // Kikapcsoljuk a scroll figyelőt, amíg a sima görgetés tart
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const requestedSection = (location.state as { scrollTo?: Section } | null)?.scrollTo;
    if (requestedSection) {
      setTimeout(() => handleSectionChange(requestedSection), 100);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections: {id: Section, offset: number}[] = [
        { id: "gallery", offset: 300 },
        { id: "house", offset: 0 }
      ];

      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section.id === "house" ? "hero" : section.id);
        if (el && scrollPos >= el.offsetTop - 70) {
          setActiveSection(section.id);
          break;
        }
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
          <div id="house"><HeroSection /></div>
          <GuestHouseSection />
          <div id="gallery"><GallerySection /></div>
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Index;
