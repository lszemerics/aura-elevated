import floorplanGround from "@/assets/floorplan-ground.jpg";
import floorplanAttic from "@/assets/floorplan-attic.png";
import propertyMap from "@/assets/property-map.jpg";
import { Clock, Key, Home, CigaretteOff, Volume2, PawPrint, Flame, Trash2, Zap, Shield, Phone, Thermometer } from "lucide-react";

interface RuleCardProps {
  icon: React.ComponentType<any>;
  title: string;
  items: string[];
}

const RuleCard = ({ icon: Icon, title, items }: RuleCardProps) => (
  <div className="p-6 bg-card rounded border border-border">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
      <h3 className="font-body text-sm font-semibold tracking-wide uppercase text-foreground">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="font-body text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const rules: RuleCardProps[] = [
  {
    icon: Clock,
    title: "Érkezés és távozás",
    items: [
      "Érkezés: 15:00 órától",
      "Távozás: 12:00 óráig",
      "Késői távozás / korai érkezés: előzetes egyeztetéssel lehetséges",
      "Érkezéskor ellenőrizzék a ház állapotát, jelezzék az esetleges hibákat",
    ],
  },
  {
    icon: Key,
    title: "Kulcsok",
    items: [
      "A kulcs elvesztése esetén a zárcsere költsége a vendéget terheli",
      "Távozáskor a kulcsokat a megbeszélt helyen kell hagyni",
    ],
  },
  {
    icon: Home,
    title: "A ház használata",
    items: [
      "Távozáskor minden ajtót és ablakot zárjanak be",
      "A berendezési tárgyakat rendeltetésszerűen használják",
    ],
  },
  {
    icon: CigaretteOff,
    title: "Dohányzás",
    items: [
      "A házban dohányozni tilos",
      "Csak a kijelölt kültéri helyen megengedett",
      "Nyílt láng használata (gyertya stb.) a házban nem engedélyezett",
    ],
  },
  {
    icon: Volume2,
    title: "Csend és nyugalom",
    items: [
      "Tartsák tiszteletben a szomszédok nyugalmát",
      "Csendes időszak: 22:00 – 10:00",
      "Zene, hangos beszéd kültéren ezen időszakban nem megengedett",
    ],
  },
  {
    icon: PawPrint,
    title: "Háziállatok",
    items: ["Háziállat NEM hozható"],
  },
  {
    icon: Flame,
    title: "Grillezés és tűzrakás",
    items: [
      "Grillezés kizárólag a kijelölt kültéri helyen",
      "Nyílt láng beltéren tilos",
      "Soha ne hagyják felügyelet nélkül a tüzet",
      "Tűzgyújtási tilalom esetén grillezés tilos",
    ],
  },
  {
    icon: Trash2,
    title: "Szemétkezelés",
    items: [
      "Háztartási hulladékot a kijelölt kukákban helyezzék el",
      "Papír, műanyag, üveg és fém különválogatása kötelező",
      "Távozáskor a szemetet kérjük kivinni",
    ],
  },
  {
    icon: Zap,
    title: "Közművek",
    items: [
      "Takarékoskodjanak a vízzel, gázzal és árammal",
      "Klímát és fűtést csak csukott ablaknál használják",
      "Meghibásodást azonnal jelezzék a házigazdának",
    ],
  },
  {
    icon: Thermometer,
    title: "Klíma használat",
    items: [
      "Csak zárt helyiségben használják",
      "Nyári javasolt hőmérséklet: 23–24°C",
      "Télen max. 22°C, fűtés a gázkazánnal (termosztát max. 23°C)",
      "Ne hagyják üresen bekapcsolva",
      "Szűrő tisztítást csak a házigazda végzi",
    ],
  },
  {
    icon: Shield,
    title: "Biztonság és felelősség",
    items: [
      "Okozott kárt haladéktalanul jelezni kell",
      "A vendég felel az általa okozott károkért",
      "Szállásadó nem felel az őrizetlenül hagyott értéktárgyakért",
      "Elsősegély-felszerelés a konyhában található",
    ],
  },
  {
    icon: Phone,
    title: "Kapcsolattartás",
    items: [
      "Telefon: +36 20 509 8419",
      "E-mail: aura.vofi@gmail.com",
      "Probléma, kérdés esetén keressék a házigazdát",
    ],
  },
];

const HouseRulesSection = () => {
  return (
    <section id="rules" className="pt-24">
      <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
          Tudnivalók
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-foreground mb-4">
          Házirend
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
          Az Önök és a jövőbeni vendégek kényelme érdekében kérjük, tartsák be a következő szabályokat.
        </p>
      </div>

      {/* Rules Grid */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map((rule) => (
            <RuleCard key={rule.title} {...rule} />
          ))}
        </div>
      </div>

      {/* Floor Plans */}
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 max-w-5xl">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6 text-center">
            Alaprajzok
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-12 text-center">
            A ház tervrajza
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">Földszint</p>
              <img src={floorplanGround} alt="Földszint alaprajz" className="w-full rounded border border-border bg-background p-2" loading="lazy" />
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">Tetőtér</p>
              <img src={floorplanAttic} alt="Tetőtér alaprajz" className="w-full rounded border border-border bg-background p-2" loading="lazy" />
            </div>
          </div>
          <div className="mt-12">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 text-center">Telekhatár térkép</p>
            <img src={propertyMap} alt="Telekhatár térkép" className="w-full max-w-lg mx-auto rounded border border-border bg-background p-2" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Important notes */}
      <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          Főszezonban (06.13.–08.31.) a minimum foglalási idő 4 éj. Rövidebb foglalási igény esetén kérjen egyedi ajánlatot.
        </p>
      </div>
    </section>
  );
};

export default HouseRulesSection;
