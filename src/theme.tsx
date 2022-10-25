import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Economica', sans-serif`,
  },
  colors: {
    themeGreen: {
      "50": "#F2F6EF",
      "100": "#DAE4D2",
      "200": "#C2D3B5",
      "300": "#ABC299",
      "400": "#93B17C",
      "500": "#7BA05F",
      "600": "#63804C",
      "700": "#4A6039",
      "800": "#314026",
      "900": "#192013"
    }
  }
});

export default theme;
