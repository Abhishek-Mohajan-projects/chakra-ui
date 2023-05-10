import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1461f5",
    800: "#2977f2",
    700: "377df2",
    600: "red",
  },
};

const fonts = {
  body: "verdana",
  heading: "tahoma",
};

const theme = extendTheme({ colors, fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
