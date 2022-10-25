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
    },
    softYellow: {
      "50": "#F6F3EF",
      "100": "#E6DED1",
      "200": "#D5C8B4",
      "300": "#C5B396",
      "400": "#B49E78",
      "500": "#A4885B",
      "600": "#836D49",
      "700": "#625237",
      "800": "#423724",
      "900": "#211B12"
    }
  }
});

export default theme;
