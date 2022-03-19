export interface IMovies {
  Search?: Search[];
  totalResults?: string;
  Response?: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Types;
  Poster: string;
}

export enum Types {
  Movie = 'movie',
  Series = 'series',
}
