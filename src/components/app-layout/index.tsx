import { useState } from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "./components/header";
import { SideBar } from "./components/sidebar";
import { Content } from "./components/content";

export function AppLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setDrawerOpen] = useState(!isMobile);

  function handleToogleDrawer() {
    setDrawerOpen(!isDrawerOpen);
  }

  function handleLinkClick() {
    if (isMobile) handleToogleDrawer();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header onToogleDrawer={handleToogleDrawer} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {isDrawerOpen && <SideBar onLinkClick={handleLinkClick} />}
        <Content />
      </Box>
    </Box>
  );
}
