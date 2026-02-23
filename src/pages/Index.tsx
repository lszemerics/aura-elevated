import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuestHouseSection from "@/components/GuestHouseSection";
import GallerySection from "@/components/GallerySection";
import HouseRulesSection from "@/components/HouseRulesSection";
import Footer from "@/components/Footer";

type Section = "house" | "gallery" | "rules";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("house");
  const [lang, setLang] = useState<"hu" | "en">("hu");

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ["rules", "gallery", "house"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("house");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        lang={lang}
        onLangChange={setLang}
      />
      <main>
        <HeroSection />
        <GuestHouseSection />
        <GallerySection />
        <HouseRulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
