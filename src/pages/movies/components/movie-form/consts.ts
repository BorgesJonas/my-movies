import { Genre } from "../../../../types/genre";

export const genreOptions = Object.keys(Genre).map((key) => ({
  value: Genre[key as keyof typeof Genre],
  label: Genre[key as keyof typeof Genre],
}));
