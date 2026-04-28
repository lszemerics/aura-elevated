import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HostSection from "@/components/HostSection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";

const Host = () => {
  const [lang, setLang] = useState<Lang>("hu");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait for layout
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 20) {
          requestAnimationFrame(() => tryScroll(attempts + 1));
        }
      };
      tryScroll();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <LangProvider value={lang}>
      <div className="min-h-screen bg-background">
        <Header
          activeSection="host"
          onSectionChange={() => {}}
          lang={lang}
          onLangChange={setLang}
        />
        <main className="pt-20">
          <HostSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Host;