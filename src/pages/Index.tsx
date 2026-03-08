import { useState, useEffect } from "react";
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

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const requestedSection = (location.state as { scrollTo?: Section } | null)?.scrollTo;
    if (requestedSection) {
      requestAnimationFrame(() => handleSectionChange(requestedSection));
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ["gallery", "house"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("house");
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
          {/* A Házirend szekciót itt töröltük! */}
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Index;
