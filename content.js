// =====================================================
// ALLT DU VILL ÄNDRA PÅ SIDAN FINNS I DEN HÄR FILEN
// Ändra bara texten mellan citattecknen " "
// "lank" = vart knappen leder. "#" betyder ingenstans än.
// =====================================================

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
    { text: "Sälj", lank: "#" },
    { text: "Hitta bostad", lank: "#" },
    { text: "För mäklare", lank: "#" },
  ],
  loggaIn: { text: "Logga in", lank: "#" },
  knapp: { text: "Testa intresset", lank: "#" },
};

// ----- STORA DELEN ÖVERST (HERO) -----
export const hero = {
  rubrik: "Hur många vill ha ditt hem?",
  text: "Lägg upp din bostad gratis och se hur många köpare som är intresserade, innan du bestämmer dig för att sälja.",
  knapp1: { text: "Testa intresset gratis", lank: "#" },
  knapp2: { text: "Jag letar bostad", lank: "#" },
  liten: "Gratis att lägga upp. Inget krav på att sälja.",
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
// farg kan vara: "gron", "bla" eller "amber"
// Lägg till ett kort: kopiera en rad { ... }, och klistra in under.
export const bostader = {
  rubrik: "Bostäder som väcker intresse",
  visaAlla: { text: "Visa alla bostäder", lank: "#" },
  lista: [
    { rubrik: "Lägenhet, [ORT]", info: "3 rum, 74 m²", intresse: "8 intresserade", farg: "gron" },
    { rubrik: "Radhus, [ORT]", info: "4 rum, 108 m²", intresse: "15 intresserade", farg: "bla" },
    { rubrik: "Fritidshus, [ORT]", info: "3 rum, 62 m²", intresse: "5 intresserade", farg: "amber" },
  ],
};

// ----- TRE RUTOR: SÄLJARE / KÖPARE / MÄKLARE -----
// stil kan vara: "bla", "gron" eller "vit"
export const malgrupper = [
  {
    rubrik: "Säljer du?",
    text: "Se vad köparna tycker innan du anlitar någon. Helt utan förpliktelser.",
    knapp: { text: "Testa intresset", lank: "#" },
    stil: "bla",
  },
  {
    rubrik: "Letar du bostad?",
    text: "Berätta vad du söker så matchar vi dig med bostäder, även innan de kommer ut på marknaden.",
    knapp: { text: "Skapa bevakning", lank: "#" },
    stil: "gron",
  },
  {
    rubrik: "Är du mäklare?",
    text: "Skapa ett gratis konto och få kontakt med säljare som redan funderar på att sälja.",
    knapp: { text: "Skapa mäklarkonto", lank: "#" },
    stil: "vit",
  },
];

// ----- GULA RUTAN LÄNGST NER -----
export const avslutning = {
  rubrik: "Ditt hem kan redan ha spekulanter.",
  knapp: { text: "Kolla intresset gratis", lank: "#" },
};

// ----- SIDFOTEN -----
export const sidfot = {
  lankar: [
    { text: "Om oss", lank: "#" },
    { text: "Kontakt", lank: "#" },
    { text: "Integritet", lank: "#" },
  ],
};
