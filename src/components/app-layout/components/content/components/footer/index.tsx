import { Box } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: "10%",
        padding: 2,
        display: "flex",
        gap: 2,
        fontSize: "0.75rem",
      }}
    >
      <p>Copyright 2024 © - Jonas Borges™</p> <p>Version: 1.0.0</p>{" "}
      <p>Developed by: Jonas Borges</p>
      <p>Support: jonas.borges.js@gmai.com</p>
    </Box>
  );
}
