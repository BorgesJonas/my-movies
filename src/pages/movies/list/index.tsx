import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Box, Button, Link } from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { PageLayout } from "../../../components/page-layout";
import { deleteMovie, getMovies } from "../../../services/movies";
import { Movie } from "../../../types/movie";
import { DeleteModal } from "./components/delete-modal";

export function List() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => (
        <Link
          component={RouterLink}
          to={`/movie/details/${params.row.id}`}
          sx={{ width: "100%", height: "100%" }}
        >
          {params.row.title}
        </Link>
      ),
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "releaseDate",
      headerName: "Release Date",
      width: 150,
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "director", headerName: "Director", width: 150 },
    {
      field: "actions",
      headerName: "",
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(`/movie/${params.row.id}`)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              handleModalOpen();
              setSelectedMovieId(params.row.id);
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  function handleModalOpen() {
    setModalOpen(!isModalOpen);
  }

  async function handleGetMovies() {
    setIsLoading(true);
    try {
      const { data } = await getMovies();
      setMovies(data);
    } catch {
      toast.error("Error while fetching movies.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteMovie() {
    await toast.promise(deleteMovie(selectedMovieId), {
      loading: "Deleting...",
      success: "Movie deleted successfully",
      error: "Could not delete",
    });
    setSelectedMovieId("");
    await handleGetMovies();
  }

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <>
      <PageLayout title="Movies">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 4,
          }}
        >
          <Button variant="contained">
            <Link
              component={RouterLink}
              to="/movie"
              sx={{ width: "100%", height: "100%", color: "#fff" }}
            >
              Create Movie
            </Link>
          </Button>
        </Box>
        <Box>
          <DataGrid
            rows={movies}
            columns={columns}
            loading={isLoading}
            style={{ minHeight: "300px" }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </PageLayout>
      <DeleteModal
        isOpen={isModalOpen}
        onConfirm={handleDeleteMovie}
        onClose={handleModalOpen}
      />
    </>
  );
}
