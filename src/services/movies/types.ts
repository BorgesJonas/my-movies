import { Movie } from "../../types/movie";

export type IMovieParams = Omit<Movie, "id">;
