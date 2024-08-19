import { Movie } from "../../../../types/movie";

export interface FormProps {
  title: string;
  director: string;
  genre: string;
  releaseDate: string;
  description: string;
  rating: number;
}

export interface MovieFormProps {
  movie?: Movie;
}
