import { AxiosResponse } from "axios";
import { Movie } from "../../types/movie";
import { service } from "../api";
import { IMovieParams } from "./types";

export async function getMovie(id: string): Promise<AxiosResponse<Movie>> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await service.get(`/movies/${id}`);
  return response;
}

export async function getMovies(): Promise<AxiosResponse<Movie[]>> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await service.get("movies");
  return response;
}

export async function postMovie(movie: IMovieParams): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await service.post("movies", movie);
}

export async function putMovie(id: string, movie: IMovieParams): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await service.put(`movies/${id}`, movie);
}

export async function deleteMovie(id: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await service.delete(`movies/${id}`);
}
