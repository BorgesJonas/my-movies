import { Box } from "@mui/material";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

export function Content() {
  return (
    <Box sx={{ width: { xs: "100%", md: "80%" } }}>
      <Main />
      <Footer />
    </Box>
  );
}
