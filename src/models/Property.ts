export type Property = {
  id: string;
  identifier: string;
  zone: string;
  town: string;
  title: string;
  description: string;
  description_en: string;
  pictures: any;
  tags: string[];
  selling: boolean;
  selling_cost: number;
  renting_cost: number;
  area: number;
  bathrooms: number;
  bedrooms: number;
  geo_lat: number;
  geo_lng: number;
  related?: Property[];
};

export type RawProperty = {
  [key: string]: unknown;
};
