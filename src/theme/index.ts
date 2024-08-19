import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#007167",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "danger" },
          style: {
            backgroundColor: "#AA4A44",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#8A3A2E",
            },
          },
        },
      ],
      styleOverrides: {
        contained: {
          backgroundColor: "#007167",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#005a53",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#007167",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "#007167",
          },
          "&:after": {
            borderBottomColor: "#007167",
          },
        },
      },
    },
  },
});
