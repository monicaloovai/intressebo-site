// =====================================================
// ALLT DU VILL ÄNDRA PÅ SIDAN FINNS I DEN HÄR FILEN
// Ändra bara texten mellan citattecknen " "
// "lank" = vart knappen leder.
// "bild" = sökväg till en bild i mappen public/bilder
// =====================================================

// ----- FORMULÄR (FORMSPREE) -----
// Skapa ett gratis konto på formspree.io och ett nytt formulär.
// Klistra in ID:t här: bokstäverna efter /f/ i länken, t.ex. "xyzabcde".
export const formspreeId = "DITT-ID";

// ----- NAMN OCH GOOGLE -----
export const site = {
  namn: "intressebo",
  googleTitel: "Intressebo – Testa intresset innan du säljer",
  googleBeskrivning:
    "Lägg upp din bostad gratis och se hur många köpare som är intresserade, innan du bestämmer dig för att sälja.",
};

// ----- MENYN HÖGST UPP -----
export const meny = {
  lankar: [
    { text: "Sälj", lank: "/salj" },
    { text: "Hitta bostad", lank: "/hitta-bostad" },
    { text: "För mäklare", lank: "/maklare" },
  ],
  loggaIn: { text: "Logga in", lank: "/logga-in" },
  knapp: { text: "Testa intresset", lank: "/salj" },
};

// ----- STORA DELEN ÖVERST (HERO) -----
export const hero = {
  rubrik: "Hur många vill ha ditt hem?",
  text: "Lägg upp din bostad gratis och se hur många köpare som är intresserade, innan du bestämmer dig för att sälja.",
  knapp1: { text: "Testa intresset gratis", lank: "/salj" },
  knapp2: { text: "Jag letar bostad", lank: "/hitta-bostad" },
  liten: "Gratis att lägga upp. Inget krav på att sälja.",
  bild: "/bilder/hero.jpg",
  kortRubrik: "Villa, [ORT]",
  kortInfo: "5 rum, 142 m², tomt 820 m²",
  notis: "12 intresserade köpare",
  matchning: "Ny matchning: söker villa i [ORT]",
};

// ----- SÅ FUNKAR DET -----
export const saFunkarDet = {
  rubrik: "Från nyfiken till såld, i din egen takt",
  steg: [
    { rubrik: "Lägg upp gratis", text: "Beskriv din bostad och ladda upp några bilder. Det tar några minuter." },
    { rubrik: "Se intresset", text: "Köpare som söker just det du har matchas mot din bostad, och du ser hur många de är." },
    { rubrik: "Välj nästa steg", text: "Sälj med vårt AI-marknadsföringspaket eller bli kontaktad av en mäklare. Du bestämmer." },
  ],
};

// ----- BOSTADSKORT -----
// farg (syns om bilden saknas): "gron", "bla" eller "amber"
// Lägg till ett kort: kopiera en rad { ... }, och klistra in under.
export const bostader = {
  rubrik: "Bostäder som väcker intresse",
  visaAlla: { text: "Visa alla bostäder", lank: "/bostader" },
  lista: [
    { rubrik: "Lägenhet, [ORT]", info: "3 rum, 74 m²", intresse: "8 intresserade", farg: "gron", bild: "/bilder/lagenhet.jpg", lank: "/hitta-bostad" },
    { rubrik: "Radhus, [ORT]", info: "4 rum, 108 m²", intresse: "15 intresserade", farg: "bla", bild: "/bilder/radhus.jpg", lank: "/hitta-bostad" },
    { rubrik: "Fritidshus, [ORT]", info: "3 rum, 62 m²", intresse: "5 intresserade", farg: "amber", bild: "/bilder/fritidshus.jpg", lank: "/hitta-bostad" },
  ],
};

// ----- TRE RUTOR: SÄLJARE / KÖPARE / MÄKLARE -----
// stil kan vara: "bla", "gron" eller "vit"
export const malgrupper = [
  {
    rubrik: "Säljer du?",
    text: "Se vad köparna tycker innan du anlitar någon. Helt utan förpliktelser.",
    knapp: { text: "Testa intresset", lank: "/salj" },
    stil: "bla",
  },
  {
    rubrik: "Letar du bostad?",
    text: "Berätta vad du söker så matchar vi dig med bostäder, även innan de kommer ut på marknaden.",
    knapp: { text: "Skapa bevakning", lank: "/hitta-bostad" },
    stil: "gron",
  },
  {
    rubrik: "Är du mäklare?",
    text: "Skapa ett gratis konto och få kontakt med säljare som redan funderar på att sälja.",
    knapp: { text: "Skapa mäklarkonto", lank: "/maklare" },
    stil: "vit",
  },
];

// ----- GULA RUTAN LÄNGST NER -----
export const avslutning = {
  rubrik: "Ditt hem kan redan ha spekulanter.",
  knapp: { text: "Kolla intresset gratis", lank: "/salj" },
};

// ----- SIDFOTEN -----
export const sidfot = {
  lankar: [
    { text: "Om oss", lank: "/om-oss" },
    { text: "Kontakt", lank: "/kontakt" },
    { text: "Integritet", lank: "/integritet" },
  ],
};

// =====================================================
// UNDERSIDOR
// typ: "formular" = sida med formulär
//      "text"     = sida med textstycken
//      "bostader" = alla bostadskort
// Fälttyper: "text", "email", "tel", "number", "textarea", "select", "checkbox"
// kravs: true = måste fyllas i
// =====================================================

const samtycke = {
  namn: "samtycke",
  etikett: "Jag godkänner att mina uppgifter behandlas enligt integritetspolicyn.",
  typ: "checkbox",
  kravs: true,
};

const bostadstyper = ["Lägenhet", "Villa", "Radhus", "Fritidshus", "Annat"];

export const sidor = {
  salj: {
    typ: "formular",
    rubrik: "Testa intresset för din bostad",
    ingress: "Berätta om din bostad så återkommer vi med hur många köpare som söker något liknande. Gratis och utan krav på att sälja.",
    knapp: "Skicka",
    falt: [
      { namn: "namn", etikett: "Ditt namn", typ: "text", kravs: true },
      { namn: "epost", etikett: "E-post", typ: "email", kravs: true },
      { namn: "telefon", etikett: "Telefon", typ: "tel" },
      { namn: "ort", etikett: "Ort eller område", typ: "text", kravs: true },
      { namn: "bostadstyp", etikett: "Typ av bostad", typ: "select", val: bostadstyper, kravs: true },
      { namn: "rum", etikett: "Antal rum", typ: "number" },
      { namn: "boarea", etikett: "Boarea (m²)", typ: "number" },
      { namn: "onskemal", etikett: "Vad vill du göra?", typ: "select", val: ["Bara testa intresset", "Köpa AI-marknadsföringspaket", "Bli kontaktad av mäklare"] },
      { namn: "meddelande", etikett: "Något mer vi bör veta?", typ: "textarea" },
      samtycke,
    ],
  },

  "hitta-bostad": {
    typ: "formular",
    rubrik: "Berätta vad du söker",
    ingress: "Skapa en bevakning så matchar vi dig med bostäder som passar, även innan de kommer ut på marknaden.",
    knapp: "Skapa bevakning",
    falt: [
      { namn: "namn", etikett: "Ditt namn", typ: "text", kravs: true },
      { namn: "epost", etikett: "E-post", typ: "email", kravs: true },
      { namn: "ort", etikett: "Var vill du bo?", typ: "text", kravs: true },
      { namn: "bostadstyp", etikett: "Typ av bostad", typ: "select", val: bostadstyper, kravs: true },
      { namn: "minRum", etikett: "Minst antal rum", typ: "number" },
      { namn: "maxPris", etikett: "Maxpris (kr)", typ: "number" },
      { namn: "meddelande", etikett: "Övriga önskemål", typ: "textarea" },
      samtycke,
    ],
  },

  maklare: {
    typ: "formular",
    rubrik: "Skapa ett gratis mäklarkonto",
    ingress: "Få kontakt med säljare som redan funderar på att sälja. Anmäl ditt intresse så hör vi av oss.",
    knapp: "Anmäl intresse",
    falt: [
      { namn: "namn", etikett: "Ditt namn", typ: "text", kravs: true },
      { namn: "byra", etikett: "Mäklarbyrå", typ: "text", kravs: true },
      { namn: "epost", etikett: "E-post", typ: "email", kravs: true },
      { namn: "telefon", etikett: "Telefon", typ: "tel" },
      { namn: "omrade", etikett: "Område du verkar i", typ: "text", kravs: true },
      samtycke,
    ],
  },

  kontakt: {
    typ: "formular",
    rubrik: "Kontakta oss",
    ingress: "Har du frågor eller funderingar? Skriv till oss så svarar vi så snart vi kan.",
    knapp: "Skicka meddelande",
    falt: [
      { namn: "namn", etikett: "Ditt namn", typ: "text", kravs: true },
      { namn: "epost", etikett: "E-post", typ: "email", kravs: true },
      { namn: "meddelande", etikett: "Meddelande", typ: "textarea", kravs: true },
      samtycke,
    ],
  },

  "logga-in": {
    typ: "formular",
    rubrik: "Inloggningen öppnar snart",
    ingress: "Vi bygger just nu inloggningen. Lämna din e-post så hör vi av oss så fort den är klar.",
    knapp: "Meddela mig",
    falt: [
      { namn: "epost", etikett: "E-post", typ: "email", kravs: true },
      samtycke,
    ],
  },

  bostader: {
    typ: "bostader",
    rubrik: "Bostäder som väcker intresse",
    ingress: "Ett urval av bostäder där köparna redan visat intresse.",
  },

  "om-oss": {
    typ: "text",
    rubrik: "Om oss",
    ingress: "Vi gör det enkelt att se vad din bostad är värd för köparna, innan du bestämmer dig.",
    stycken: [
      "Att sälja sin bostad är ett av livets största beslut. Ändå vet de flesta inte hur stort intresset är förrän bostaden redan ligger ute. Det vill vi ändra på.",
      "Här kan du testa intresset gratis, köpare kan bevaka bostäder som passar dem, och mäklare får kontakt med säljare som redan funderar på att sälja.",
      "[Berätta här om dig själv och varför du startade tjänsten.]",
    ],
  },

  integritet: {
    typ: "text",
    rubrik: "Integritetspolicy",
    ingress: "Så här hanterar vi dina personuppgifter.",
    stycken: [
      "Personuppgiftsansvarig är [FÖRETAGSNAMN], org.nr [ORG.NR]. Du når oss på [E-POST].",
      "Vi samlar in de uppgifter du själv lämnar i våra formulär, till exempel namn, e-post, telefon och uppgifter om din bostad eller vad du söker.",
      "Uppgifterna används för att besvara din förfrågan, matcha köpare och säljare och, om du har bett om det, förmedla kontakt med mäklare.",
      "Formulären skickas via tjänsten Formspree, som behandlar uppgifterna för vår räkning.",
      "Vi sparar inte uppgifterna längre än nödvändigt. Du har rätt att få veta vilka uppgifter vi har om dig, få dem rättade eller raderade. Kontakta oss på [E-POST].",
      "Du kan också lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
    ],
  },
};
