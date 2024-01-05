import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";
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
    background: {
      default: "#131D23",
      paper: "#ffff",
    },
  },
  typography: {
    fontFamily: ["Barlow", "Inter"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={purpleTheme}>
    <React.StrictMode>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </React.StrictMode>
  </ThemeProvider>
);
