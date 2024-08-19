import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { PageLayout } from "../../../components/page-layout";
import { MovieForm } from "../components/movie-form";
import { getMovie } from "../../../services/movies";
import { Movie } from "../../../types/movie";

export function Update() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

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
      <PageLayout title="Edit Movie" isLoading={isLoading}>
        <MovieForm movie={movie} />
      </PageLayout>
    </>
  );
}
