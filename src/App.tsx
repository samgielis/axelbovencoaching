import { ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { ScreenRouter } from "./ScreenRouter";
import theme from "./theme";

export const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Axel Boven Coaching</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ChakraProvider theme={theme} resetCSS>
      <ScreenRouter />
    </ChakraProvider>
  </HelmetProvider>
);
