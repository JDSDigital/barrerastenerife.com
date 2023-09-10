type Types = {
  name: string;
  value:
    | "flat"
    | "chalet"
    | "country_house"
    | "bungalow"
    | "room"
    | "parking"
    | "shop"
    | "industrial"
    | "office"
    | "land"
    | "storage"
    | "building"
    | ""
    | undefined;
};

export const types: Types[] = [
  {
    name: "all",
    value: "",
  },
  {
    name: "flat",
    value: "flat",
  },
  {
    name: "chalet",
    value: "chalet",
  },
  {
    name: "country_house",
    value: "country_house",
  },
  {
    name: "room",
    value: "room",
  },
  {
    name: "parking",
    value: "parking",
  },
  {
    name: "shop",
    value: "shop",
  },
  {
    name: "industrial",
    value: "industrial",
  },
  {
    name: "office",
    value: "office",
  },
  {
    name: "land",
    value: "land",
  },
  {
    name: "storage",
    value: "storage",
  },
  {
    name: "building",
    value: "building",
  },
];

type Contracts = {
  name: string;
  value: "rent" | "sell" | "vacation" | "";
};

export const contract: Contracts[] = [
  { name: "all", value: "" },
  { name: "rent", value: "rent" },
  { name: "sell", value: "sell" },
];

type Rooms = {
  name: string;
  value: string;
};

export const rooms: Rooms[] = [
  {
    name: "all",
    value: "",
  },
  {
    name: "1",
    value: "1",
  },
  {
    name: "2",
    value: "2",
  },
  {
    name: "3",
    value: "3",
  },
  {
    name: "4",
    value: "4",
  },
  {
    name: "5",
    value: "5",
  },
  {
    name: "6",
    value: "6",
  },
  {
    name: "7",
    value: "7",
  },
  {
    name: "10",
    value: "10",
  },
];

type Baths = {
  name: string;
  value: string;
};

export const baths: Baths[] = [
  {
    name: "all",
    value: "",
  },
  {
    name: "1",
    value: "1",
  },
  {
    name: "2",
    value: "2",
  },
  {
    name: "3",
    value: "3",
  },
  {
    name: "4",
    value: "4",
  },
  {
    name: "5",
    value: "5",
  },
  {
    name: "6",
    value: "6",
  },
  {
    name: "7",
    value: "7",
  },
  {
    name: "10",
    value: "10",
  },
];

type Sort = {
  name: string;
  value:
    | "creation_date_desc"
    | "creation_date_asc"
    | "price_desc"
    | "price_asc";
};

export const sort_by: Sort[] = [
  {
    name: "creation_date_desc",
    value: "creation_date_desc",
  },
  {
    name: "price_desc",
    value: "price_desc",
  },
  {
    name: "price_asc",
    value: "price_asc",
  },
];

export const zones = [
  {
    name: "all",
    value: "",
  },
  {
    name: "adeje",
    value: "Adeje",
    highlight: true,
  },
  {
    name: "armenime",
    value: "Armeñime",
  },
  {
    name: "callao",
    value: "Callao Salvaje",
  },
  {
    name: "costaAdeje",
    value: "Costa Adeje",
  },
  {
    name: "duque",
    value: "El Duque",
  },
  {
    name: "caldera",
    value: "La Caldera",
  },
  {
    name: "caleta",
    value: "La Caleta",
  },
  {
    name: "madronal",
    value: "Madroñal",
  },
  {
    name: "playaAmericas",
    value: "Playa de Las Americas",
  },
  {
    name: "playaParaiso",
    value: "Playa Paraiso",
  },
  {
    name: "roqueConde",
    value: "Roque del Conde",
  },
  {
    name: "sanEugenioAlto",
    value: "San Eugenio Alto",
  },
  {
    name: "sanEugenioBajo",
    value: "San Eugenio Bajo",
  },
  {
    name: "tijoco",
    value: "Tijoco",
  },
  {
    name: "torviscasAlto",
    value: "Torviscas Alto",
  },
  {
    name: "torviscasBajo",
    value: "Torviscas Bajo",
  },
  {
    name: "arona",
    value: "Arona",
    highlight: true,
  },
  {
    name: "buzanada",
    value: "Buzanada",
  },
  {
    name: "caboBlanco",
    value: "Cabo Blanco",
  },
  {
    name: "chayofa",
    value: "Chayofa",
  },
  {
    name: "costaSilencio",
    value: "Costa del Silencio",
  },
  {
    name: "camella",
    value: "La Camella",
  },
  {
    name: "galletas",
    value: "Las Galletas",
  },
  {
    name: "cristianos",
    value: "Los Cristianos",
  },
  {
    name: "palMar",
    value: "Palm-Mar",
  },
  {
    name: "parqueReina",
    value: "Parque de la Reina",
  },
  {
    name: "valleSanLorenzo",
    value: "Valle San Lorenzo",
  },
  {
    name: "granadilla",
    value: "Granadilla de Abona",
    highlight: true,
  },
  {
    name: "sanIsidro",
    value: "San Isidro",
  },
  {
    name: "losAbrigos",
    value: "Los Abrigos",
  },
  {
    name: "laTejita",
    value: "La Tejita",
  },
  {
    name: "elMedano",
    value: "El Medano",
  },
  {
    name: "guiaIsora",
    value: "Guia de Isora",
    highlight: true,
  },
  {
    name: "alcala",
    value: "Alcala",
  },
  {
    name: "playaSanJuan",
    value: "Playa San Juan",
  },
  {
    name: "norte",
    value: "Norte",
    highlight: true,
  },
  {
    name: "sanCristobalLaguna",
    value: "San Cristobal de la Laguna",
  },
  {
    name: "santaCruz",
    value: "Santa Cruz de Tenerife",
  },
  {
    name: "puertoCruz",
    value: "Puerto de la Cruz",
  },
  {
    name: "sanMiguel",
    value: "San Miguel de Abona",
    highlight: true,
  },
  {
    name: "aldeaBlanca",
    value: "Aldea Blanca",
  },
  {
    name: "amarillaGolf",
    value: "Amarilla Golf",
  },
  {
    name: "elRoque",
    value: "El Roque",
  },
  {
    name: "golfSur",
    value: "Golf del Sur",
  },
  {
    name: "guargacho",
    value: "Guargacho",
  },
  {
    name: "chafiras",
    value: "Las Chafiras",
  },
  {
    name: "zocas",
    value: "Las Zocas",
  },
  {
    name: "llanoCamello",
    value: "Llano del Camello",
  },
  {
    name: "santiago",
    value: "Santiago del Teide",
    highlight: true,
  },
  {
    name: "gigantes",
    value: "Acantilados de Los Gigantes",
  },
  {
    name: "arguayo",
    value: "Arguayo",
  },
  {
    name: "puertoSantiago",
    value: "Puerto de Santiago",
  },
];

export const tags = [
  { value: "", name: "all" },
  // { value: "access from street", name: "" },
  // { value: "air conditioner", name: "" },
  // { value: "alarm", name: "" },
  // { value: "aluminum windows", name: "" },
  // { value: "apartment", name: "" },
  // { value: "attached", name: "" },
  // { value: "automated doors", name: "" },
  // { value: "balcony", name: "" },
  // { value: "barbecue", name: "" },
  // { value: "basement", name: "" },
  // { value: "bohemian", name: "" },
  // { value: "bright", name: "" },
  // { value: "buildable", name: "" },
  // { value: "built-in wardrobes", name: "" },
  // { value: "bungalow", name: "" },
  // { value: "butane gas", name: "" },
  // { value: "caretaker", name: "" },
  // { value: "central heating", name: "" },
  // { value: "chimney", name: "" },
  // { value: "clothes line", name: "" },
  // { value: "communal swimming pool", name: "" },
  // { value: "community garden", name: "" },
  // { value: "concrete structure", name: "" },
  // { value: "condominium", name: "" },
  // { value: "corner", name: "" },
  // { value: "country estate", name: "" },
  // { value: "disabled access", name: "" },
  // { value: "dishwasher", name: "" },
  // { value: "doorman", name: "" },
  // { value: "double glazing", name: "" },
  // { value: "downtown", name: "" },
  // { value: "duplex", name: "" },
  // { value: "east", name: "" },
  // { value: "electric heating", name: "" },
  { value: "elevator", name: "elevator" },
  // { value: "emblematic building", name: "" },
  // { value: "emergency exit", name: "" },
  // { value: "equipped kitchen", name: "" },
  // { value: "extinguisher", name: "" },
  // { value: "false ceiling", name: "" },
  // { value: "farmhouse", name: "" },
  // { value: "floating floor", name: "" },
  // { value: "floor tiles", name: "" },
  // { value: "from a bank", name: "" },
  // { value: "furnished", name: "" },
  // { value: "furnished kitchen", name: "" },
  { value: "garage", name: "garage" },
  // { value: "garage included", name: "" },
  { value: "garden", name: "garden" },
  // { value: "golf views", name: "" },
  // { value: "green area", name: "" },
  // { value: "gym", name: "" },
  // { value: "half bathroom", name: "" },
  // { value: "heating oil", name: "" },
  // { value: "historic", name: "" },
  // { value: "hotel", name: "" },
  // { value: "hotel industry", name: "" },
  // { value: "individual heating", name: "" },
  // { value: "industrial area", name: "" },
  // { value: "inner courtyard", name: "" },
  // { value: "insurance", name: "" },
  // { value: "interior", name: "" },
  // { value: "internet", name: "" },
  // { value: "large lightwell", name: "" },
  // { value: "laundry", name: "" },
  // { value: "lightwell", name: "" },
  // { value: "loft", name: "" },
  // { value: "low house", name: "" },
  // { value: "luggage storage room", name: "" },
  // { value: "luxury", name: "" },
  // { value: "mansion", name: "" },
  // { value: "marble floor", name: "" },
  // { value: "metallic structure", name: "" },
  // { value: "mountain views", name: "" },
  // { value: "natural gas", name: "" },
  // { value: "new", name: "" },
  // { value: "new construction", name: "" },
  // { value: "north", name: "" },
  // { value: "open kitchen", name: "" },
  // { value: "open space", name: "" },
  { value: "outdoor", name: "outdoor" },
  // { value: "paddle tennis court", name: "" },
  // { value: "pantry", name: "" },
  // { value: "parking", name: "" },
  // { value: "parquet floor", name: "" },
  // { value: "patio", name: "" },
  // { value: "penthouse", name: "" },
  // { value: "permanent ford", name: "" },
  // { value: "pets", name: "" },
  // { value: "playground", name: "" },
  // { value: "plot", name: "" },
  // { value: "porch", name: "" },
  // { value: "private urbanization", name: "" },
  // { value: "protected building", name: "" },
  // { value: "radiating floor", name: "" },
  // { value: "raised floor", name: "" },
  // { value: "reformed", name: "" },
  // { value: "reinforced door", name: "" },
  { value: "rooftop terrace", name: "rooftop_terrace" },
  // { value: "sauna", name: "" },
  { value: "sea views", name: "sea_views" },
  // { value: "security 24h", name: "" },
  // { value: "security cameras", name: "" },
  // { value: "security door", name: "" },
  // { value: "semidetached", name: "" },
  // { value: "service bedroom", name: "" },
  // { value: "service elevator", name: "" },
  // { value: "singular", name: "" },
  // { value: "smoke detector", name: "" },
  // { value: "smoke extractor", name: "" },
  // { value: "smooth walls", name: "" },
  // { value: "solarium", name: "" },
  // { value: "south", name: "" },
  // { value: "squash court", name: "" },
  // { value: "stairs", name: "" },
  // { value: "stippled walls", name: "" },
  { value: "storage room", name: "storage_room" },
  // { value: "storage room included", name: "" },
  // { value: "students", name: "" },
  // { value: "studio", name: "" },
  // { value: "subsidised housing", name: "" },
  // { value: "sunny", name: "" },
  { value: "swimming pool", name: "swimming_pool" },
  // { value: "tennis court", name: "" },
  { value: "terrace", name: "terrace" },
  // { value: "terrazzo floor", name: "" },
  // { value: "to reform", name: "" },
  // { value: "tourist", name: "" },
  // { value: "townhouse", name: "" },
  // { value: "transfer", name: "" },
  // { value: "triplex", name: "" },
  // { value: "TV antenna", name: "" },
  // { value: "unfurnished", name: "" },
  // { value: "vent", name: "" },
  // { value: "video intercom", name: "" },
  // { value: "villa", name: "" },
  // { value: "warehouse", name: "" },
  // { value: "west", name: "" },
  // { value: "wifi", name: "" },
  // { value: "wooden structure", name: "" },
  // { value: "wooden windows", name: "" },
];

export const promotions = [
  {
    type: "amarilla",
    name: "Amarilla Golf",
  },
  // {
  //   type: "sanblas",
  //   name: "San Blas",
  // },
  {
    type: "tejita",
    name: "La Tejita",
  },
  {
    type: "medano",
    name: "El Médano",
  },
  // {
  //   type: "abrigos",
  //   name: "Los Abrigos",
  // },
  {
    type: "adeje",
    name: "Adeje",
  },
  {
    type: "abama",
    name: "Abama",
  },
  {
    type: "sanjuan",
    name: "Playa San Juan",
  },
  {
    type: "isora",
    name: "Guía de Isora",
  },
  // {
  //   type: "saneugenio",
  //   name: "San Eugenio Alto",
  // },
  // {
  //   type: "puerto",
  //   name: "Puerto de la Cruz",
  // },
];

export const MIN_PRICE = 0;
export const MAX_PRICE = 50000000;
export const LUXURY_MIN_PRICE = 800000;

export const PROPERTIES_PRICE_RANGE: [number, number] = [
  MIN_PRICE,
  LUXURY_MIN_PRICE,
];

export const LUXURY_PROPERTIES_PRICE_RANGE: [number, number] = [
  LUXURY_MIN_PRICE,
  MAX_PRICE,
];
