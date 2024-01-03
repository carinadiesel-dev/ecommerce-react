import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const purpleTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#864B98",
      light: "#d279eb",
      dark: "#441647",
    },
    secondary: {
      main: "#131D23",
      light: "#62BBC1",
    },
    error: {
      main: "#a01a22",
    },
    info: {
      main: "#3e92cc",
    },
    success: {
      main: "#d1beb0",
    },
  },
  typography: {
    fontFamily: ["Barlow", "Inter"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={purpleTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
