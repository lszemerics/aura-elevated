import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuestHouseSection from "@/components/GuestHouseSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";

const Index = () => {
  const [activeSection, setActiveSection] = useState<any>("house");
  const [lang, setLang] = useState<Lang>("hu");

  const handleSectionChange = (section: any) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

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
