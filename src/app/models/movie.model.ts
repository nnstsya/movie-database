export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  total_results: number;
}

export interface MovieResponseModel {
  dates: ShowDuration;
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

type ShowDuration = {
  maximum: string;
  minimum: string;
}

export enum MoviePosition {
  FIRST = "FIRST",
  MIDDLE = "MIDDLE",
  LAST = "LAST",
  ONLY = "ONLY"
}
