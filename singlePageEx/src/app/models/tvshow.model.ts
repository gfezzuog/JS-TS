import { createdBy } from "./createdby.model";

export class TvShow{
  adult!: boolean;
  backdrop_path!: string | null;
  first_air_date!: string;
  genres!: Generi;
  id!: number;
  name!: string;
  origin_country!: string[];
  original_language!: string;
  original_name!: string;
  overview!: string;
  popularity!: number;
  poster_path!: string | null;
  softcore!: boolean;
  vote_average!: number;
  vote_count!: number;
  created_by!: createdBy[]
}

export interface Generi{
  id: Number,
  name: string,
}