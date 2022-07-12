export interface Movie {
  adult?: boolean;
  backdrop_path: string;
  poster_size: string;
  genre_ids?: number[];
  id: number;
  original_language: "en";
  original_title: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: false;
  vote_average: number;
  vote_count?: number;
}
