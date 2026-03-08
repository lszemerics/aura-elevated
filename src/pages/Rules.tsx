import { useState } from "react";
import Header from "@/components/Header";
import HouseRulesSection from "@/components/HouseRulesSection";
import Footer from "@/components/Footer";
import { LangProvider, type Lang } from "@/lib/i18n";

const Rules = () => {
  const [lang, setLang] = useState<Lang>("hu");

  return (
    <LangProvider value={lang}>
      <div className="min-h-screen bg-background">
        <Header 
          activeSection="rules" 
          onSectionChange={() => {}}
          lang={lang}
          onLangChange={setLang}
        />
        <main className="pt-16">
          <HouseRulesSection />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Rules;
