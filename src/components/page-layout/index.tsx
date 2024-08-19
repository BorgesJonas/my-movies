import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { AppLayoutProps } from "./types";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function PageLayout({
  title,
  isLoading = false,
  children,
}: AppLayoutProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Box
      sx={{
        padding: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Box display="flex" alignItems="center" marginBottom={4} gap={2}>
        <IconButton
          onClick={handleGoBack}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontSize: "30px",
          }}
        >
          {title}
        </Typography>
      </Box>
      {children}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
