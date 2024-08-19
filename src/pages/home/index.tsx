import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { navItems } from "../../communs/consts";

export function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "30px",
            marginBottom: 4,
          }}
        >
          Welcome to My Movies Application
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "12px",
            marginBottom: 4,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          elementum augue a nunc eleifend rutrum. Fusce luctus erat ac mi
          consequat convallis. Sed diam risus, rhoncus eget leo ut, fermentum
          malesuada turpis. Cras et est sed libero imperdiet hendrerit vel
          vestibulum odio. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec hendrerit vulputate tellus nec rhoncus. Quisque sit
          amet maximus purus. Mauris efficitur justo at massa pharetra, sit amet
          bibendum purus venenatis. Fusce eros est, tristique ac blandit at,
          tristique at lectus. Ut accumsan dignissim eros auctor molestie.
        </Typography>
        <Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              padding: {
                xs: 0,
                md: 10,
              },
            }}
          >
            {navItems.map(({ title, to }) => (
              <ListItem key={title} sx={{ width: "auto" }}>
                <Link
                  component={RouterLink}
                  to={to}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <ListItemText primary={title} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
