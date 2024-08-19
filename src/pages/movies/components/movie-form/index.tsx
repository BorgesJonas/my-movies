import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import { genreOptions } from "./consts";
import { schema } from "./schema";
import { MovieFormProps, FormProps } from "./types";
import { postMovie, putMovie } from "../../../../services/movies";
import { Genre } from "../../../../types/genre";
import {
  formatBrowserDateToISODate,
  formatISODateToBrowserDate,
} from "../../../../utils/formatters";

export function MovieForm({ movie }: MovieFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      director: "",
      genre: "",
      releaseDate: "",
      description: "",
      rating: 0,
    },
  });

  function handleRedirectToList() {
    navigate("/movies");
  }

  async function handleFormSubmit(formData: FormProps) {
    setIsLoading(true);

    const data = {
      ...formData,
      releaseDate: formatISODateToBrowserDate(formData.releaseDate),
    };

    if (movie) {
      await toast.promise(putMovie(movie.id, data), {
        loading: "Editing...",
        success: "Movie edited successfully",
        error: "Could not edit",
      });
    } else {
      await toast.promise(postMovie(data), {
        loading: "Saving...",
        success: "Movie saved successfully.",
        error: "Could not save.",
      });

      reset();
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (movie) {
      setValue("title", movie.title);
      setValue("director", movie.director);
      setValue("genre", movie.genre as Genre);
      setValue("releaseDate", formatBrowserDateToISODate(movie.releaseDate));
      setValue("description", movie.description);
      setValue("rating", movie.rating);
    }
  }, [movie, setValue]);

  return (
    <Box
      sx={{
        padding: 2,
      }}
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} item>
          <TextField
            sx={{ width: "100%" }}
            label="Title"
            variant="standard"
            {...register("title")}
            error={!!errors?.title}
            helperText={errors?.title?.message}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            sx={{ width: "100%" }}
            label="Director"
            variant="standard"
            {...register("director")}
            error={!!errors?.description}
            helperText={errors?.description?.message}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <Controller
            name="genre"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                select
                sx={{ width: "100%" }}
                label="Genre"
                variant="standard"
                {...field}
                error={!!error}
                helperText={error?.message}
                InputLabelProps={{ shrink: true }}
              >
                {genreOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <TextField
            sx={{ width: "100%" }}
            type="date"
            label="Release Date"
            variant="standard"
            {...register("releaseDate")}
            error={!!errors?.description}
            helperText={errors?.description?.message}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid xs={12} sm={4} item>
          <TextField
            type="number"
            sx={{ width: "100%" }}
            label="Rating"
            variant="standard"
            {...register("rating")}
            error={!!errors?.rating}
            helperText={errors?.rating?.message}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid xs={12} item>
          <TextField
            {...register("description")}
            label="Description"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            error={!!errors.description}
            helperText={errors.description?.message}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid xs={12} item>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {movie && (
              <Button
                type="button"
                onClick={handleRedirectToList}
                disabled={isLoading}
                variant="danger"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                }}
              >
                Cancel
              </Button>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
