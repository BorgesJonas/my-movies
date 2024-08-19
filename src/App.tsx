import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { AppToaster } from "./components/app-toaster";
import { routes } from "./routes";
import { theme } from "./theme";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppToaster />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}
