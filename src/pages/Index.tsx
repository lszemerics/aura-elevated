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

  useEffect(() => {
    const handleScroll = () => {
      const sections: Array<"gallery" | "house"> = ["gallery", "house"];
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
