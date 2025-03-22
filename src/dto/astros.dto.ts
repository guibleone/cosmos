export interface CreateAstroDto {
  name: string;
  category: string;
  description?: string;
  image_url?: string;
  distance_sun: number;
  weight: number;
}
