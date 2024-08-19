import { useTheme } from "@emotion/react";
import { Toaster } from "react-hot-toast";

export function AppToaster() {
  const theme = useTheme();

  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        loading: {
          style: {
            backgroundColor: "#007167",
            padding: "16px",
            color: "#fff",
            fontFamily: "Roboto, sans-serif",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#007167",
          },
        },
        success: {
          style: {
            backgroundColor: "#007167",
            padding: "16px",
            color: "#fff",
            fontFamily: "Roboto, sans-serif",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#007167",
          },
        },
        error: {
          style: {
            backgroundColor: "#007167",
            padding: "16px",
            color: "#fff",
            fontFamily: "Roboto, sans-serif",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#007167",
          },
        },
      }}
    />
  );
}
