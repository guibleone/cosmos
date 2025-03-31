export type Astro = {
  id_astro: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  distance_sun: number;
  weight: number;
  created_at: Date;
  updated_at: Date;
};

export type QueryParams = {
  search?: string;
  category?: string;
  filter?: string;
  limit?: string;
  offset?: string;
};
