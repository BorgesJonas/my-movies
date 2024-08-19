import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Main() {
  return (
    <Box component="main" sx={{ height: "90%", overflowX: "auto" }}>
      <Outlet />
    </Box>
  );
}
