import { Artist } from "@/models/entity/artist.js";
import { Medium } from "@/models/entity/medium.js";

export type Collection = {
  id: number,
  title: string;
  description: string;
  classification: string;
  year: string;
  medium: Array<Medium>
  artist: Array<Artist>
  image?: string;
  link?: string;
  size?: string;
}
