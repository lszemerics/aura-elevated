import Header from "@/components/Header";
import HouseRulesSection from "@/components/HouseRulesSection";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";

const Rules = () => {
  // Mivel ez egy külön oldal, itt csak a fejléc, a szekció és a lábléc kell
  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection="rules" 
        onSectionChange={() => {}} // Itt nem kell görgetés
        lang="hu" // Ezt az App.tsx-ből is lehetne kezelni, de kezdésnek fixáljuk
        onLangChange={() => {}}
      />
      <main className="pt-16">
        <HouseRulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
