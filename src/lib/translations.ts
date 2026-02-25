import type { Lang } from "./i18n";

// All translatable strings grouped by component/section
export const translations = {
  nav: {
    house: { hu: "Aura Vendégház", en: "Aura Guest House" },
    gallery: { hu: "Galéria", en: "Gallery" },
    rules: { hu: "Házirend", en: "House Rules" },
  },

  hero: {
    subtitle: {
      hu: "Hangulatos, téliesített családi nyaraló Révfülöp szívében",
      en: "A charming, year-round holiday home in the heart of Révfülöp",
    },
    type: { hu: "Vendégház", en: "Guest House" },
  },

  house: {
    sectionLabel: { hu: "A vendégház", en: "The guest house" },
    heading1: { hu: "Modern kényelem,", en: "Modern comfort," },
    heading2: { hu: "balatoni nyugalom", en: "lakeside tranquillity" },
    intro: {
      hu: "Új építésű, modern kialakítású, tágas ház Révfülöp szívében. Az állomások, strandok, sétány és éttermek gyalogosan elérhetők 5–10 perc sétára, mégis egy nyugodt, kellemes környezetbe térhetnek vissza a nap végén.",
      en: "A newly built, spacious modern house in the heart of Révfülöp. The train station, beaches, promenade, and restaurants are all within a 5–10 minute walk, yet you return to a peaceful, relaxing retreat at the end of each day.",
    },
    features: [
      { hu: { title: "4+1 szoba", desc: "14–16 fő részére, francia ágyak" }, en: { title: "4+1 rooms", desc: "For 14–16 guests, king-size beds" } },
      { hu: { title: "Klíma", desc: "Hűtő-fűtő klíma egész évben" }, en: { title: "Air conditioning", desc: "Heating & cooling all year round" } },
      { hu: { title: "Gyerekbarát", desc: "Etetőszék, utazóágy, babakonyha" }, en: { title: "Child-friendly", desc: "High chair, travel cot, play kitchen" } },
      { hu: { title: "2500 m² kert", desc: "Csendes belső telek, cseresznyefák" }, en: { title: "2,500 m² garden", desc: "Secluded plot with cherry trees" } },
      { hu: { title: "WiFi & Okos TV", desc: "Projektor mozizáshoz" }, en: { title: "WiFi & Smart TV", desc: "Projector for movie nights" } },
      { hu: { title: "Parkolás", desc: "Akár 6-8 autónak" }, en: { title: "Parking", desc: "Space for 6–8 cars" } },
      { hu: { title: "Felszerelt konyha", desc: "Mosogatógép, Nespresso, air fryer" }, en: { title: "Fully equipped kitchen", desc: "Dishwasher, Nespresso, air fryer" } },
      { hu: { title: "Szórakozás", desc: "Biliárd, vetítő, nagy tetőtér" }, en: { title: "Entertainment", desc: "Billiards, projector, spacious loft" } },
    ],
    livingTitle: { hu: "Nappali & Konyha", en: "Living Room & Kitchen" },
    livingItems: {
      hu: [
        "Egy légterű modern konyha–nappali (40 m²)",
        "12 férőhelyes étkező asztal, igény szerint bővíthető",
        "Felszerelt konyha: mosogatógép, hűtő, mikro, air fryer, Nespresso, vízforraló, kenyérpirító",
        "Okos TV, projektor mozizás élményhez",
        "4 különálló hálószoba, 2–2 főnek",
        "2 fürdőszoba WC-vel: zuhanyzós és kádas",
      ],
      en: [
        "Open-plan modern kitchen and living area (40 m²)",
        "Dining table for 12, expandable on request",
        "Fully equipped kitchen: dishwasher, fridge, microwave, air fryer, Nespresso, kettle, toaster",
        "Smart TV, projector for a cinema experience",
        "4 separate bedrooms, each for 2 guests",
        "2 bathrooms with WC: walk-in shower and bathtub",
      ],
    },
    atticTitle: { hu: "Tetőtér", en: "Loft Space" },
    atticItems: {
      hu: [
        "Hatalmas, egy légterű tetőtér (70 m²)",
        "Extra fekvőhelyek 4–8 fő részére",
        "Gyerekeknek, fiataloknak ideális",
        "Biliárd asztal",
        "Hatalmas projektor vetítő",
      ],
      en: [
        "Spacious open-plan loft (70 m²)",
        "Additional sleeping for 4–8 guests",
        "Ideal for children and teenagers",
        "Billiard table",
        "Large projector screen",
      ],
    },
    gardenTitle: { hu: "Kültér & Kert", en: "Outdoors & Garden" },
    gardenItems: {
      hu: [
        "2500 m²-es csendes belső telek",
        "Nagy terasz közös reggelikhez, estékhez",
        "Grillezési lehetőség",
        "Mini foci, röplabda, tollaslabda",
        "Cseresznyefák árnyéka a pihenéshez",
        "Parkolás akár 6–8 autónak",
      ],
      en: [
        "2,500 m² secluded inner plot",
        "Large terrace for communal breakfasts and evening gatherings",
        "Barbecue facilities",
        "Football, volleyball, badminton",
        "Shaded relaxation under cherry trees",
        "Parking for up to 6–8 cars",
      ],
    },
    activitiesLabel: { hu: "Programlehetőségek", en: "Things to do" },
    activitiesTitle: { hu: "A környéken", en: "In the area" },
    activities: {
      hu: [
        "Strandolás és vízi sportok",
        "Kerékpárút a Balaton körül",
        "Borkóstolók a Balaton-felvidéken",
        "Túrázás: Folly arborétum, Tihany, Badacsony",
        "Hajójáratok Balatonboglárra, Balatonlellére",
        "Fesztiválok: Kőfeszt, Kapolcs",
        "Liliomkert Piac (Káptalantóti)",
        "Ultrabalaton, Balaton átúszás",
      ],
      en: [
        "Swimming and water sports",
        "Cycling around Lake Balaton",
        "Wine tasting in the Balaton Uplands",
        "Hiking: Folly Arboretum, Tihany, Badacsony",
        "Ferry trips to Balatonboglár and Balatonlelle",
        "Festivals: Kőfeszt, Kapolcs",
        "Liliomkert Market (Káptalantóti)",
        "Ultrabalaton, Cross-Balaton Swim",
      ],
    },
  },

  gallery: {
    label: { hu: "Képek", en: "Photos" },
    title: { hu: "Galéria", en: "Gallery" },
    categories: {
      all: { hu: "Összes", en: "All" },
      exterior: { hu: "Kívülről", en: "Exterior" },
      living: { hu: "Közösségi terek", en: "Common Areas" },
      rooms: { hu: "Szobák", en: "Bedrooms" },
      bathroom: { hu: "Fürdőszobák", en: "Bathrooms" },
    },
    imageAlts: [
      { hu: "A ház kívülről – homlokzat", en: "House exterior – facade" },
      { hu: "Kert – sziklakert felülről", en: "Garden – rock garden from above" },
      { hu: "Kert – ösvény nyáron", en: "Garden – pathway in summer" },
      { hu: "Kert – ösvény és sziklák", en: "Garden – pathway and rocks" },
      { hu: "A ház a kertből nézve", en: "House from the garden" },
      { hu: "A ház elölnézetből", en: "House – front view" },
      { hu: "Nappali és konyha", en: "Living room and kitchen" },
      { hu: "Tetőtér – vetítő és biliárd", en: "Loft – projector and billiards" },
      { hu: "Nappali – étkezőből nézve", en: "Living room – from dining area" },
      { hu: "Tetőtér – pihenőzóna", en: "Loft – lounge area" },
      { hu: "Hálószoba – kék fal, francia ágy", en: "Bedroom – teal accent wall, king bed" },
      { hu: "Hálószoba – mustár függönyök", en: "Bedroom – mustard curtains" },
      { hu: "Hálószoba – zöld fal, kanapéágy", en: "Bedroom – green wall, sofa bed" },
      { hu: "Hálószoba – zöld fal, dupla ágy", en: "Bedroom – green wall, double bed" },
      { hu: "Fürdőszoba – zuhanyzó", en: "Bathroom – walk-in shower" },
      { hu: "Fürdőszoba – kád és mosógép", en: "Bathroom – bathtub and washing machine" },
    ],
  },

  rules: {
    sectionLabel: { hu: "Tudnivalók", en: "Information" },
    title: { hu: "Házirend", en: "House Rules" },
    subtitle: {
      hu: "Az Önök és a jövőbeni vendégek kényelme érdekében kérjük, tartsák be a következő szabályokat.",
      en: "For your comfort and that of future guests, please observe the following rules.",
    },
    cards: [
      {
        hu: { title: "Érkezés és távozás", items: ["Érkezés: 15:00 órától", "Távozás: 12:00 óráig", "Késői távozás / korai érkezés: előzetes egyeztetéssel lehetséges", "Érkezéskor ellenőrizzék a ház állapotát, jelezzék az esetleges hibákat"] },
        en: { title: "Check-in & Check-out", items: ["Check-in: from 3:00 PM", "Check-out: by 12:00 PM", "Late check-out / early check-in: available upon prior arrangement", "Please inspect the property on arrival and report any issues"] },
      },
      {
        hu: { title: "Kulcsok", items: ["A kulcs elvesztése esetén a zárcsere költsége a vendéget terheli", "Távozáskor a kulcsokat a megbeszélt helyen kell hagyni"] },
        en: { title: "Keys", items: ["The cost of lock replacement due to lost keys is the guest's responsibility", "Please leave the keys in the designated location upon departure"] },
      },
      {
        hu: { title: "A ház használata", items: ["Távozáskor minden ajtót és ablakot zárjanak be", "A berendezési tárgyakat rendeltetésszerűen használják"] },
        en: { title: "Property usage", items: ["Please close all doors and windows when leaving", "Use all furnishings and equipment for their intended purpose"] },
      },
      {
        hu: { title: "Dohányzás", items: ["A házban dohányozni tilos", "Csak a kijelölt kültéri helyen megengedett", "Nyílt láng használata (gyertya stb.) a házban nem engedélyezett"] },
        en: { title: "Smoking", items: ["Smoking is strictly prohibited indoors", "Smoking is only permitted in the designated outdoor area", "Open flames (candles, etc.) are not allowed inside the house"] },
      },
      {
        hu: { title: "Csend és nyugalom", items: ["Tartsák tiszteletben a szomszédok nyugalmát", "Csendes időszak: 22:00 – 10:00", "Zene, hangos beszéd kültéren ezen időszakban nem megengedett"] },
        en: { title: "Quiet hours", items: ["Please respect the neighbours' peace and privacy", "Quiet hours: 10:00 PM – 10:00 AM", "Music, loud conversation or other noise outdoors is not permitted during quiet hours"] },
      },
      {
        hu: { title: "Háziállatok", items: ["Háziállat NEM hozható"] },
        en: { title: "Pets", items: ["Pets are NOT permitted"] },
      },
      {
        hu: { title: "Grillezés és tűzrakás", items: ["Grillezés kizárólag a kijelölt kültéri helyen", "Nyílt láng beltéren tilos", "Soha ne hagyják felügyelet nélkül a tüzet", "Tűzgyújtási tilalom esetén grillezés tilos"] },
        en: { title: "Barbecue & open fire", items: ["Barbecuing is only permitted in the designated outdoor area", "Open flames are strictly prohibited indoors", "Never leave a fire or grill unattended", "Barbecuing is prohibited during fire bans"] },
      },
      {
        hu: { title: "Szemétkezelés", items: ["Háztartási hulladékot a kijelölt kukákban helyezzék el", "Papír, műanyag, üveg és fém különválogatása kötelező", "Távozáskor a szemetet kérjük kivinni"] },
        en: { title: "Waste disposal", items: ["Place household waste in the designated bins", "Recycling (paper, plastic, glass, metal) is mandatory", "Please dispose of all rubbish upon departure"] },
      },
      {
        hu: { title: "Közművek", items: ["Takarékoskodjanak a vízzel, gázzal és árammal", "Klímát és fűtést csak csukott ablaknál használják", "Meghibásodást azonnal jelezzék a házigazdának"] },
        en: { title: "Utilities", items: ["Please conserve water, gas, and electricity", "Use air conditioning and heating only with windows closed", "Report any malfunctions to the host immediately"] },
      },
      {
        hu: { title: "Klíma használat", items: ["Csak zárt helyiségben használják", "Nyári javasolt hőmérséklet: 23–24°C", "Télen max. 22°C, fűtés a gázkazánnal (termosztát max. 23°C)", "Ne hagyják üresen bekapcsolva", "Szűrő tisztítást csak a házigazda végzi"] },
        en: { title: "Air conditioning", items: ["Use only in enclosed rooms", "Recommended summer setting: 23–24°C", "Winter maximum: 22°C; primary heating via gas boiler (thermostat max. 23°C)", "Do not leave the unit running in empty rooms", "Filter cleaning is handled by the host only"] },
      },
      {
        hu: { title: "Biztonság és felelősség", items: ["Okozott kárt haladéktalanul jelezni kell", "A vendég felel az általa okozott károkért", "Szállásadó nem felel az őrizetlenül hagyott értéktárgyakért", "Elsősegély-felszerelés a konyhában található"] },
        en: { title: "Safety & liability", items: ["Any damage must be reported immediately", "Guests are liable for damage caused by themselves or their visitors", "The host is not responsible for valuables left unattended", "A first-aid kit is located in the kitchen"] },
      },
      {
        hu: { title: "Kapcsolattartás", items: ["Telefon: +36 20 509 8419", "E-mail: aura.vofi@gmail.com", "Probléma, kérdés esetén keressék a házigazdát"] },
        en: { title: "Contact", items: ["Phone: +36 20 509 8419", "Email: aura.vofi@gmail.com", "Please contact the host for any questions or issues"] },
      },
    ],
    floorplansLabel: { hu: "Alaprajzok", en: "Floor Plans" },
    floorplansTitle: { hu: "A ház tervrajza", en: "Property Layout" },
    groundFloor: { hu: "Földszint", en: "Ground Floor" },
    attic: { hu: "Tetőtér", en: "Loft" },
    propertyMap: { hu: "Telekhatár térkép", en: "Property Boundary Map" },
    seasonNote: {
      hu: "Főszezonban (06.13.–08.31.) a minimum foglalási idő 4 éj. Rövidebb foglalási igény esetén kérjen egyedi ajánlatot.",
      en: "During peak season (June 13 – August 31) the minimum booking is 4 nights. For shorter stays, please request a custom quote.",
    },
  },

  footer: {
    subtitle: { hu: "Vendégház · Révfülöp", en: "Guest House · Révfülöp" },
    copyright: {
      hu: "Aura Vendégház. Minden jog fenntartva.",
      en: "Aura Guest House. All rights reserved.",
    },
  },
} as const;

// Helper to pick the right language value from a { hu, en } object
export function pick<T>(obj: { hu: T; en: T }, lang: Lang): T {
  return obj[lang];
}
