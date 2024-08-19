import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { navItems } from "../../../../communs/consts";

import { SidebarProps } from "./types";

export function SideBar({ onLinkClick }: SidebarProps) {
  return (
    <Box
      component="aside"
      sx={{
        padding: "8px",
        backgroundColor: "#007167",
        position: {
          xs: "absolute",
          md: "relative",
        },
        width: {
          xs: "100%",
          md: "20%",
        },
        height: "100%",
        zIndex: 100,
      }}
    >
      <nav>
        <List>
          {navItems.map(({ title, to }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <Link
                  component={RouterLink}
                  to={to}
                  onClick={onLinkClick}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <ListItemText sx={{ color: "#fff" }} primary={title} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
