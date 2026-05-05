import { TvShow } from "./tvshow.model";

export interface tmdbGet {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}