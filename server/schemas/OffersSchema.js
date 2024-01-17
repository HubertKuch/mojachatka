const { validator } = require("@exodus/schemasafe");

const { isImage } = require("../utils/isImage");
const { SellType, OfferType } = require("@prisma/client");
const cities = require("../data/cities.json");
const { normalizeToEn } = require("../utils/normalizeChars");

const securitySchema = {
  type: "object",
  properties: {
    antiBreakingRoles: {
      type: "boolean",
      label: "System antywłamaniowy",
    },
    monitoring: {
      type: "boolean",
      label: "Monitoring",
    },
    security: {
      type: "boolean",
      label: "System ochrony",
    },
    antiBurglaryWindows: {
      type: "boolean",
      label: "Okna antywłamaniowe",
    },
    antiBurglaryDoors: {
      type: "boolean",
      label: "Drzwi antywłamaniowe",
    },
    alarmSystem: {
      type: "boolean",
      label: "System alarmowy",
    },
    intercom: {
      type: "boolean",
      label: "Domofon",
    },
    videophone: {
      type: "boolean",
      label: "Wideofon",
    },
    closedArea: {
      type: "boolean",
      label: "Ogrodzony teren",
    },
  },
};

const conditionSchema = {
  type: "string",
  enum: ["FORRESIDENCE", "FORFINISHING", "FORRENOVATION"],
  cases: {
    FORRESIDENCE: "do zamieszkania",
    FORFINISHING: "do wykonczenia",
    FORRENOVATION: "do remontu",
  },
};

const heatingSchema = {
  type: "string",
  cases: {
    OIL: "Olejowe",
    FIREPLACE: "Kominkowe",
    COAL: "Węglowe",
    SOLARCOLLECTOR: "kolektor słoneczny",
    ELECTRIC: "elektryczne",
    TILEDSTOVES: "piec kaflowy",
    BIOMASS: "biomasa",
    GEOTHERMAL: "geotermika",
    CITY: "miejskie",
    GAS: "gazowe",
    PUMP: "pompa ciepła",
  },
  enum: [
    "OIL",
    "FIREPLACE",
    "COAL",
    "SOLARCOLLECTOR",
    "ELECTRIC",
    "TILEDSTOVES",
    "BIOMASS",
    "GEOTHERMAL",
    "CITY",
    "GAS",
    "PUMP",
  ],
};

const equipmentSchema = {
  type: "object",
  properties: {
    furniture: {
      label: "Meble",
      type: "boolean",
    },
    washingMachine: {
      label: "Pralka",
      type: "boolean",
    },
    dishwasher: {
      label: "Zmywarka",
      type: "boolean",
    },
    refrigerator: {
      label: "Lodówka",
      type: "boolean",
    },
    stove: {
      label: "Piec",
      type: "boolean",
    },
    oven: {
      label: "Piekarnik",
      type: "boolean",
    },
    tv: {
      label: "Telewizja",
      type: "boolean",
    },
  },
};

const mediaSchema = {
  internet: {
    label: "Internet",
    type: "boolean",
  },
  cableTv: {
    label: "Telewizja kablowa",
    type: "boolean",
  },
  telephone: {
    label: "Telefon",
    type: "boolean",
  },
  water: {
    label: "Woda",
    type: "boolean",
  },
  energy: {
    label: "Energia elektryczna",
    type: "boolean",
  },
  gas: {
    label: "Gaz",
    type: "boolean",
  },
  sewage: {
    label: "Kanalizacja",
    type: "boolean",
  },
  severs: {
    label: "Śmieci",
    type: "boolean",
  },
  setpticTank: {
    label: "Szambo",
    type: "boolean",
  },
};

const garageSchema = {
  type: "object",
  properties: {
    heating: {
      type: "boolean",
      label: "Ogrzewanie",
    },
    sizeInMeters: {
      type: "number",
      label: "Wielkosc w metrach kwadratowych",
    },
    lighting: {
      label: "Oświetlenie",
      type: "boolean",
    },
    availableFrom: {
      label: "Dostępny od",
      type: "string",
    },
    location: {
      label: "Lokalizacja",
      type: "string",
      cases: {
        NEAR_HOUSE: "Przy domu",
        IN_BUILDING: "W budynku",
        ALONE: "Samodzielny",
      },
      enum: ["NEAR_HOUSE", "IN_BUILDING", "ALONE"],
    },
    construction: {
      label: "Konstrukcja",
      type: "string",
      cases: {
        BRICK: "Murowana",
        SHED: "Wiata",
        TIN: "Blaszany",
        WOODEN: "Drewniany",
      },
      enum: ["BRICK", "SHED", "TIN", "WOODEN"],
    },
  },
};

const roomSchema = {
  type: "object",
  properties: {
    personsInRooms: {
      type: "integer",
      label: "Liczba osób w pokoju",
    },
    sizeInMeters: {
      type: "number",
      label: "Wielkosc w metrach kwadratowych",
    },
    heating: heatingSchema,
    availableFrom: { type: "string", label: "Dostępny od" },
    onlyForNoSmokers: { type: "boolean", label: "Tylko dla nie palących" },
    equipment: equipmentSchema,
    media: {
      type: "object",
      properties: {
        internet: {
          type: "boolean",
          label: "Internet",
        },
        cableTv: { type: "boolean", label: "Telewizja kablowa" },

        telephone: { type: "boolean", label: "Telefon" },
      },
    },
  },
};

const apartmentSchema = {
  type: "object",
  properties: {
    floor: { type: "number", label: "Piętro" },
    availableFrom: { type: "string", label: "Dostępny od" },
    propertyForm: {
      type: "string",
      enum: ["SHARE", "FULLOWNERSHIP", "COOPERATIVEPROPRIETARY", "COOPERATIVE"],
      cases: {
        SHARE: "udział",
        COOPERATIVEPROPRIETARY: "spółdzielcze własnościowe",
        COOPERATIVE: "spółdzielcze wł. z KW",
        FULLOWNERSHIP: "pełna własność",
      },
      label: "Forma własności",
    },
    equipment: equipmentSchema,
    security: securitySchema,
    area: {
      type: "number",
      label: "Powierzchnia",
    },

    media: mediaSchema,
    additionalInfo: {
      type: "object",
      properties: {
        balcony: { type: "boolean", label: "Balkon" },
        basement: { type: "boolean", label: "Piwnica" },
        elevator: { type: "boolean", label: "Winda" },
        airConditioner: { type: "boolean", label: "Klimatyzacja" },
        utilityRoom: { type: "boolean", label: "Pomieszczenie gospodarcze" },
        garden: { type: "boolean", label: "Ogród" },
        twoFloors: { type: "boolean", label: "Dwa piętra" },
        onlyForNoSmokers: { type: "boolean", label: "Tylko dla niepalących" },
        garage: { type: "boolean", label: "Garaż" },
        parking: { type: "boolean", label: "Miejsce parkingowe" },
        terrace: { type: "boolean", label: "Taras" },
        separatedKitchen: { type: "boolean", label: "Oddzielna kuchnia" },
      },
    },
    material: {
      type: "string",
      enum: [
        "BRICK",
        "WOOD",
        "HOLLOW BLOCK",
        "LARGE EXPANDED CLAY",
        "BEON BOARD",
        "SILICATE",
        "CELLULAR CONCRETE",
        "OTHER",
      ],
      cases: {
        BRICK: "Cegła",
        WOOD: "Drewno",
        HOLLOW_BLOCK: "Bloczki komórkowe",
        LARGE_EXPANDED_CLAY: "Duża ekspandowana glina",
        BEON_BOARD: "Deska beonowa",
        SILICATE: "Silikat",
        CELLULAR_CONCRETE: "Beton komórkowy",
        OTHER: "Inny",
      },
      label: "Materiał budynku",
    },
    condition: conditionSchema,
    floorsNumber: { type: "number", label: "Liczba pięter" },
    heating: heatingSchema,
    windows: {
      type: "string",
      enum: ["NONE", "PLASTIC", "WOODEN", "ALUMINUM"],
      cases: {
        NONE: "Brak",
        PLASTIC: "Plastikowe",
        WOODEN: "Drewniane",
        ALUMINUM: "Aluminiowe",
      },
      label: "Okna",
    },
    developmentType: {
      type: "string",
      enum: [
        "DETACHED",
        "SEMI-DETACHED",
        "TERRACED",
        "TENEMENT",
        "MANOR",
        "FARM",
      ],
      cases: {
        DETACHED: "Wolnostojący",
        "SEMI-DETACHED": "Bliźniak",
        TERRACED: "Szeregowiec",
        TENEMENT: "Kamienica",
        MANOR: "Dwór",
        FARM: "Gospodarstwo",
      },
      label: "Typ zabudowy",
    },
  },
};

const commercialLocalSchema = {
  type: "object",
  properties: {
    buildYear: {
      type: "number",
      label: "Rok budowy",
    },
    floor: {
      type: "number",
      label: "Piętro",
    },
    area: {
      type: "number",
      label: "Powierzchnia",
    },
    localLocation: {
      type: "string",
      cases: {
        MALL: "Centrum handlowe",
        "OFFICE BUILDING": "Budynek biurowy",
        BLOCK: "Blok",
        TOWNHOUSE: "Dom szeregowy",
        PRIVATEHOUSE: "Dom prywatny",
        HISTORICBUILDING: "Budynek zabytkowy",
        SEPARATEOBJECT: "Oddzielny obiekt",
      },
      enum: [
        "MALL",
        "OFFICE BUILDING",
        "BLOCK",
        "TOWNHOUSE",
        "PRIVATEHOUSE",
        "HISTORICBUILDING",
        "SEPARATEOBJECT",
      ],
      label: "Lokalizacja",
    },
    destiny: {
      type: "string",
      enum: [
        "SERVICE",
        "OFFICE",
        "CATERING",
        "INDUSTRIAL",
        "HOTEL",
        "COMMERCIAL",
      ],
      cases: {
        SERVICE: "Usługi",
        OFFICE: "Biurowy",
        CATERING: "Gastronomiczny",
        INDUSTRIAL: "Przemysłowy",
        HOTEL: "Hotel",
        COMMERCIAL: "Handlowy",
      },
      label: "Przeznaczenie",
    },
    primaryMarket: {
      type: "boolean",
      label: "Na rynku pierwotnym",
    },
    availableFrom: {
      type: "string",
      label: "Dostępny od",
    },
    condition: conditionSchema,
    equipment: equipmentSchema,
    media: mediaSchema,
  },
};

const plotSchema = {
  type: "object",
  properties: {
    sizeInMeters: {
      type: "number",
      label: "Wymiar w m2",
    },
    availableFrom: {
      type: "string",
      label: "Dostępny od",
    },
    type: {
      type: "string",
      cases: {
        CONSTRUCTION: "Budowlana",
        AGRICULTURAL: "Rolna",
        RECREATIONAL: "Rekreacyjna",
        SUBINVESTMENTS: "Pod inwestycje",
        FOREST: "Leśna",
        AGRO_CONSTRUCTION: "Rolno-budowlana",
        HABITAT: "Siedliskowa",
        OTHER: "Inna",
      },
      enum: [
        "CONSTRUCTION",
        "AGRICULTURAL",
        "RECREATIONAL",
        "SUBINVESTMENTS",
        "FOREST",
        "AGRO_CONSTRUCTION",
        "HABITAT",
        "OTHER",
      ],
      label: "Typ działki",
    },
    surroundings: {
      type: "string",
      cases: {
        FOREST: "Las",
        SEA: "Morze",
        LAKE: "Jezioro",
        MOUNTAINS: "Góry",
        OPEN_AREA: "Otwarta przestrzeń",
      },
      enum: ["FOREST", "SEA", "LAKE", "MOUNTAINS", "OPEN_AREA"],
      label: "Otoczenie",
    },
    media: mediaSchema,
    location: {
      type: "string",
      cases: {
        CITY: "Miasto",
        OUTSKIRTS: "Przedmieścia",
        CONTRYSIDE: "Wieś",
      },
      enum: ["CITY", "OUTSKIRTS", "COUNTRYSIDE"],
      label: "Lokalizacja",
    },
    roadAccess: {
      type: "string",
      cases: {
        FIELD: "Polna",
        PAVED: "Brukowana",
        ASPHALT: "Asfaltowa",
      },
      enum: ["FIELD", "PAVED", "ASPHALT"],
      label: "Dostęp do drogi",
    },
    fence: {
      type: "string",
      cases: {
        NONE: "Brak",
        BRICK: "Murowane",
        WOODEN: "Drewniane",
        MESH: "Metalowe siatki",
        CONCRETE: "Betonowe",
        METAL: "Metalowe",
        HEDGE: "Żywopłot",
        OTHER: "Inne",
      },
      enum: [
        "NONE",
        "BRICK",
        "WOODEN",
        "MESH",
        "CONCRETE",
        "METAL",
        "HEDGE",
        "OTHER",
      ],
      label: "Ogrodzenie",
    },
  },
};

const warehouseSchema = {
  type: "object",
  properties: {
    heightInMeters: {
      type: "number",
      label: "Wysokość (w metrach)",
    },
    construction: {
      type: "string",
      label: "Konstrukcja",
    },
    parking: {
      type: "boolean",
      label: "Parking",
    },
    flooring: {
      type: "boolean",
      label: "Podłoga",
    },
    heating: heatingSchema,
    useFacility: {
      type: "string",
      cases: {
        WAREHOUSE: "Magazyn",
        PRODUCTION: "Produkcyjny",
        COMMERCIAL: "Handlowy",
        OFFICE: "Biuro",
      },
      enum: ["WAREHOUSE", "PRODUCTION", "COMMERCIAL", "OFFICE"],
      label: "Przeznaczenie obiektu",
    },
    availableFrom: {
      type: "string",
      label: "Dostępny od",
    },
    road: {
      type: "string",
      cases: {
        UNPAVED: "Nieutwardzona",
        PAVED: "Utylizowana",
        ASPHALT: "Asfaltowa",
      },
      enum: ["UNPAVED", "PAVED", "ASPHALT"],
      label: "Droga dojazdowa",
    },
    ramp: {
      type: "boolean",
      label: "Rampa",
    },
    officeRooms: {
      type: "boolean",
      label: "Pomieszczenia biurowe",
    },
    socialRooms: {
      type: "boolean",
      label: "Pomieszczenia socjalne",
    },
    media: mediaSchema,
    additionalInfo: {
      type: "object",
      properties: {
        window: { type: "boolean", label: "Okna" },
        elevator: { type: "boolean", label: "Winda" },
        parking: { type: "boolean", label: "Parking" },
        asphaltAccess: { type: "boolean", label: "Dostęp asfaltowy" },
        airConditioning: { type: "boolean", label: "Klimatyzacja" },
        heating: { type: "boolean", label: "Ogrzewanie" },
        furnishings: { type: "boolean", label: "Umeblowanie" },
      },
    },
    equipment: equipmentSchema,
  },
};

const fenceSchema = {
  type: "string",
  cases: {
    BRICK: "Murowane",
    WOODEN: "Drewniane",
    MESH: "Metalowe siatki",
    CONCRETE: "Betonowe",
    METAL: "Metalowe",
    HEDGE: "Żywopłot",
    OTHER: "Inne",
  },
  enum: ["BRICK", "WOODEN", "MESH", "CONCRETE", "METAL", "HEDGE", "OTHER"],
  label: "Rodzaj ogrodzenia",
};

const roomsSchema = {
  type: "object",
  properties: {
    total: {
      type: "integer",
      label: "Liczba pokoi",
    },
    bedrooms: {
      type: "integer",
      label: "Liczba sypialni",
    },
    bathrooms: {
      type: "integer",
      label: "Liczba łazienek",
    },
  },
};

const houseSchema = {
  type: "object",
  properties: {
    rooms: roomsSchema,
    media: mediaSchema,
    security: securitySchema,
    additionalInfo: {
      type: "object",
      properties: {
        basement: { type: "boolean", label: "Piwnica" },
        pool: { type: "boolean", label: "Basen" },
        attic: { type: "boolean", label: "Strych" },
        airConditioner: { type: "boolean", label: "Klimatyzacja" },
        garage: { type: "boolean", label: "Garaż" },
      },
    },
    buildYear: { type: "number", label: "Rok budowy" },
    developmentType: {
      type: "string",
      cases: {
        DETACHED: "Dom jednorodzinny",
        "SEMI-DETACHED": "Bliźniak",
        TERRACED: "Szeregowiec",
        TENEMENT: "Kamienica",
        MANOR: "Dwór",
        FARM: "Farma",
      },
      enum: [
        "DETACHED",
        "SEMI-DETACHED",
        "TERRACED",
        "TENEMENT",
        "MANOR",
        "FARM",
      ],
      label: "Typ zabudowy",
    },
    material: {
      type: "string",
      cases: {
        BRICK: "Cegła",
        WOOD: "Drewno",
        "HOLLOW BLOCK": "Bloczek komórkowy",
        "LARGE EXPANDED CLAY": "Duży keramzyt",
        "BEON BOARD": "Płyta beonowa",
        SILICATE: "Silikat",
        "CELLULAR CONCRETE": "Beton komórkowy",
        OTHER: "Inny",
      },
      enum: [
        "BRICK",
        "WOOD",
        "HOLLOW BLOCK",
        "LARGE EXPANDED CLAY",
        "BEON BOARD",
        "SILICATE",
        "CELLULAR CONCRETE",
        "OTHER",
      ],
      label: "Materiał budynku",
    },
    windows: {
      type: "string",
      cases: {
        NONE: "Brak",
        PLASTIC: "Plastikowe",
        WOODEN: "Drewniane",
        ALUMINUM: "Aluminiowe",
      },
      enum: ["NONE", "PLASTIC", "WOODEN", "ALUMINUM"],
      label: "Okna",
    },
    condition: conditionSchema,
    roof: {
      type: "string",
      cases: {
        NO: "Brak",
        OBLIQUE: "Skosy",
        FLAT: "Płaski",
      },
      enum: ["NO", "OBLIQUE", "FLAT"],
      label: "Dach",
    },
    attic: {
      type: "string",
      cases: {
        NONE: "Brak",
        UTILITARIAN: "Użytkowe",
        NOTUTILITARIAN: "Nie użytkowe",
      },
      enum: ["NONE", "UTILITARIAN", "NOTUTILITARIAN"],
      label: "Strych",
    },
    roofing: {
      type: "string",
      cases: {
        SHEETMETAL: "Blacha",
        ROOFTILES: "Dachówki",
        ASBESTOS: "Azbest",
        SHINGLES: "Gonty bitumiczne",
        SLATE: "Łupek",
        ROOFINGFELT: "Papa",
        THATCH: "Strzecha",
        OTHER: "Inne",
      },
      enum: [
        "SHEETMETAL",
        "ROOFTILES",
        "ASBESTOS",
        "SHINGLES",
        "SLATE",
        "ROOFINGFELT",
        "THATCH",
        "OTHER",
      ],
      label: "Pokrycie dachowe",
    },
    location: {
      type: "string",
      cases: {
        CITY: "Miasto",
        OUTSKIRTS: "Przedmieścia",
        COUNTRYSIDE: "Wieś",
      },
      enum: ["CITY", "OUTSKIRTS", "COUNTRYSIDE"],
      label: "Lokalizacja",
    },
    availableFrom: { type: "string", label: "Dostępny od" },
    fence: fenceSchema,
    heating: heatingSchema,
    roadAcces: {
      type: "string",
      cases: {
        FIELD: "Bez utwardzenia",
        PAVED: "Utylizowana",
        ASPHALT: "Asfaltowa",
      },
      enum: ["FIELD", "PAVED", "ASPHALT"],
      label: "Dostęp do drogi",
    },
    primaryMarket: { type: "boolean", label: "Na rynku pierwotnym" },
    houseArea: { type: "number", label: "Powierzchnia domu" },
    plotArea: { type: "number", label: "Powierzchnia działki" },
  },
};

const addressSchema = {
  type: "object",
  properties: {
    region: {
      type: "string",
      cases: {
        DOLNOSLASKIE: "Dolnośląskie",
        KUJAWSKOPOMORSKIE: "Kujawsko-Pomorskie",
        LUBELSKIE: "Lubelskie",
        LUBUSKIE: "Lubuskie",
        LODZKIE: "Łódzkie",
        MALOPOLSKIE: "Małopolskie",
        MAZOWIECKIE: "Mazowieckie",
        OPOLSKIE: "Opolskie",
        PODLASKIE: "Podlaskie",
        PODKARPACKIE: "Podkarpackie",
        POMORSKIE: "Pomorskie",
        SLASKIE: "Śląskie",
        SWIETOKRZYSKIE: "Świętokrzyskie",
        WARMINSKOMAZURSKIE: "Warmińsko-Mazurskie",
        WIELKOPOLSKIE: "Wielkopolskie",
        ZACHODNIOPOMORSKIE: "Zachodniopomorskie",
      },
      enum: [
        "DOLNOSLASKIE",
        "KUJAWSKOPOMORSKIE",
        "LUBELSKIE",
        "LUBUSKIE",
        "LODZKIE",
        "MALOPOLSKIE",
        "MAZOWIECKIE",
        "OPOLSKIE",
        "PODLASKIE",
        "PODKARPACKIE",
        "POMORSKIE",
        "SLASKIE",
        "SWIETOKRZYSKIE",
        "WARMINSKOMAZURSKIE",
        "WIELKOPOLSKIE",
        "ZACHODNIOPOMORSKIE",
      ],
      label: "Region",
    },
    city: { type: "string", label: "Miasto", format: "city" },
    zipCode: { type: "string", label: "Kod pocztowy" },
    address: { type: "string", label: "Adres" },
    houseNumber: { type: "string", label: "Numer domu" },
    localNumber: { type: "string", label: "Numer lokalu" },
  },
  required: ["region", "city", "zipCode", "address", "houseNumber"],
};

const createOfferSchema = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        title: { type: "string", minLength: 8, maxLength: 120, label: "Tytuł" },
        description: {
          type: "string",
          minLength: 40,
          maxLength: 4000,
          label: "Opis",
        },
        price: { type: ["integer", "null"], minimum: 1, label: "Cena" },
        pricePerMonth: {
          type: ["integer", "null"],
          minimum: 1,
          label: "Cena per miesiąc",
        },
        type: {
          type: "string",
          enum: Object.values(OfferType),
          cases: OfferType,
          label: "Typ oferty",
        },
        sellType: {
          type: "string",
          enum: Object.values(SellType),
          cases: {
            BUY: "Sprzedaz",
            RENT: "Wynajem",
          },
          label: "Typ sprzedaży",
        },
        lat: { type: "number", label: "Szerokość geograficzna" },
        lng: { type: "number", label: "Długość geograficzna" },
        features: {
          type: "array",
          uniqueItems: true,
          items: [{ type: "string" }],
          label: "Cechy oferty",
        },
        properties: {
          type: "object",
          properties: {
            address: addressSchema,
            house: houseSchema,
            garage: garageSchema,
            plot: plotSchema,
            room: roomSchema,
            warehouse: warehouseSchema,
            apartment: apartmentSchema,
            commercialLocal: commercialLocalSchema,
          },
          label: "Właściwości nieruchomości",
          images: {
            type: "array",
            minItems: 1,
            maxItems: 20,
            items: [
              {
                type: "string",
                format: "base64",
              },
            ],
            label: "Zdjęcia nieruchomości",
          },
          required: ["images", "security", "address"],
        },
      },
      required: [
        "title",
        "description",
        "type",
        "sellType",
        "properties",
        "lat",
        "lng",
      ],
    },
  },
  required: ["data"],
};

const createOfferConfig = {
  formats: {
    base64: (el) => isImage(el),
    city: (city) =>
      cities.find(
        (c) =>
          normalizeToEn(c.toLowerCase()) === normalizeToEn(city.toLowerCase()),
      ),
  },
  mode: "lax",
  allErrors: true,
  includeErrors: true,
};

const getCreateOfferValidator = () =>
  validator(createOfferSchema, createOfferConfig);

module.exports = { getCreateOfferValidator, createOfferSchema };
