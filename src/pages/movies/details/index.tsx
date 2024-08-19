import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { PageLayout } from "../../../components/page-layout";
import { getMovie } from "../../../services/movies";
import { Movie } from "../../../types/movie";
import { Grid, Typography } from "@mui/material";

export function Details() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  function getPageTitle() {
    if (isLoading) return "Loading...";
    if (!isLoading && movie) return movie.title;
    return "Details";
  }

  async function handleGetMovie(id: string) {
    setIsLoading(true);

    try {
      const { data } = await getMovie(id);
      setMovie(data);
    } catch {
      toast.error("Error while fetching movie.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      handleGetMovie(id);
    }
  }, [id]);

  return (
    <>
      <PageLayout title={getPageTitle()} isLoading={isLoading}>
        <Grid container spacing={4}>
          <Grid xs={12} md={3} item>
            <Typography>Director: {movie?.director}</Typography>
          </Grid>

          <Grid xs={12} md={3} item>
            <Typography>Genre: {movie?.genre}</Typography>
          </Grid>

          <Grid xs={12} md={3} item>
            <Typography>Release Date: {movie?.releaseDate}</Typography>
          </Grid>

          <Grid xs={12} md={3} item>
            <Typography>Rating: {movie?.rating}</Typography>
          </Grid>
        </Grid>
        <Grid container marginTop={4}>
          <Grid xs={12} item>
            <Typography>{movie?.description}</Typography>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
}
