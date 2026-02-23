import interiorLiving from "@/assets/interior-living.jpg";
import interiorAttic from "@/assets/interior-attic.jpg";
import gardenImg from "@/assets/garden.jpg";
import { Bed, Snowflake, Baby, Trees, Wifi, Car, UtensilsCrossed, Tv } from "lucide-react";

const features = [
  { icon: Bed, title: "4+1 szoba", desc: "14–16 fő részére, francia ágyak" },
  { icon: Snowflake, title: "Klíma", desc: "Hűtő-fűtő klíma egész évben" },
  { icon: Baby, title: "Gyerekbarát", desc: "Etetőszék, utazóágy, babakonyha" },
  { icon: Trees, title: "2500 m² kert", desc: "Csendes belső telek, cseresznyefák" },
  { icon: Wifi, title: "WiFi & Okos TV", desc: "Projektor mozizáshoz" },
  { icon: Car, title: "Parkolás", desc: "Akár 6-8 autónak" },
  { icon: UtensilsCrossed, title: "Felszerelt konyha", desc: "Mosogatógép, Nespresso, air fryer" },
  { icon: Tv, title: "Szórakozás", desc: "Biliárd, vetítő, nagy tetőtér" },
];

const GuestHouseSection = () => {
  return (
    <section id="house" className="pt-24">
      {/* Intro */}
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          A vendégház
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-8">
          Modern kényelem,<br />balatoni nyugalom
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Új építésű, modern kialakítású, tágas ház Révfülöp szívében. Az állomások, strandok, sétány és éttermek gyalogosan elérhetők 5–10 perc sétára, mégis egy nyugodt, kellemes környezetbe térhetnek vissza a nap végén.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 bg-card rounded border border-border hover:border-foreground/20 transition-colors">
              <f.icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="font-body text-sm font-semibold tracking-wide uppercase text-foreground mb-1">{f.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image + Text: Living */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <img src={interiorLiving} alt="Nappali és konyha" className="w-full aspect-[4/3] object-cover rounded" loading="lazy" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">Nappali & Konyha</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
              <li>• Egy légterű modern konyha–nappali (40 m²)</li>
              <li>• 12 férőhelyes étkező asztal, igény szerint bővíthető</li>
              <li>• Felszerelt konyha: mosogatógép, hűtő, mikro, air fryer, Nespresso, vízforraló, kenyérpirító</li>
              <li>• Okos TV, hatalmas projektor mozizás élményhez</li>
              <li>• 4 különálló hálószoba, 2–2 főnek</li>
              <li>• 2 fürdőszoba WC-vel: zuhanyzós és kádas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image + Text: Attic */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="order-2 md:order-1">
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">Tetőtér</h3>
          <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
            <li>• Hatalmas, egy légterű tetőtér (70 m²)</li>
            <li>• Extra fekvőhelyek 4–8 fő részére</li>
            <li>• Gyerekeknek, fiataloknak ideális</li>
            <li>• Biliárd asztal</li>
            <li>• Hatalmas projektor vetítő</li>
          </ul>
        </div>
        <img src={interiorAttic} alt="Tetőtér" className="w-full aspect-[4/3] object-cover rounded order-1 md:order-2" loading="lazy" />
      </div>

      {/* Garden */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <img src={gardenImg} alt="Kert és terasz" className="w-full aspect-[4/3] object-cover rounded" loading="lazy" />
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">Kültér & Kert</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-3 leading-relaxed">
              <li>• 2500 m²-es csendes belső telek</li>
              <li>• Nagy terasz közös reggelikhez, estékhez</li>
              <li>• Grillezési lehetőség</li>
              <li>• Mini foci, röplabda, tollaslabda</li>
              <li>• Cseresznyefák árnyéka a pihenéshez</li>
              <li>• Parkolás akár 6–8 autónak</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">Programlehetőségek</p>
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-10">A környéken</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {[
            "Strandolás és vízi sportok",
            "Kerékpárút a Balaton körül",
            "Borkóstolók a Balaton-felvidéken",
            "Túrázás: Folly arborétum, Tihany, Badacsony",
            "Hajójáratok Balatonboglárra, Balatonlellére",
            "Fesztiválok: Kőfeszt, Kapolcs",
            "Liliomkert Piac (Káptalantóti)",
            "Ultrabalaton, Balaton átúszás",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
              <span className="font-body text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestHouseSection;
