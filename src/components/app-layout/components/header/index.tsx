import { AppBar, Toolbar, IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

import { HeaderProps } from "./types";

export function Header({ onToogleDrawer }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToogleDrawer}
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          component={RouterLink}
          to="/"
          sx={{ color: "#fff", textDecoration: "none" }}
        >
          My Movies
        </Link>
      </Toolbar>
    </AppBar>
  );
}
