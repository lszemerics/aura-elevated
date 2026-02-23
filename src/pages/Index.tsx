import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuestHouseSection from "@/components/GuestHouseSection";
import HouseRulesSection from "@/components/HouseRulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"house" | "rules">("house");
  const [lang, setLang] = useState<"hu" | "en">("hu");

  const handleSectionChange = (section: "house" | "rules") => {
    setActiveSection(section);
    const el = document.getElementById(section === "house" ? "house" : "rules");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const rulesEl = document.getElementById("rules");
      if (rulesEl) {
        const rect = rulesEl.getBoundingClientRect();
        setActiveSection(rect.top < window.innerHeight / 2 ? "rules" : "house");
      }
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
        <HouseRulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
