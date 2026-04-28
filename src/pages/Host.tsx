import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HostSection from "@/components/HostSection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";

const Host = () => {
  const [lang, setLang] = useState<Lang>("hu");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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