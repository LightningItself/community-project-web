import { extendTheme } from "@chakra-ui/react";
// color palette: #000000 #282A3A #735F32 #C69749

const lightTheme = extendTheme({
  colors: {
    brand: {
      600: "#000000",
      50: "#E2E2E2",
      100: "#282A3A",
      500: "#282A3A",
      300: "#735F32",
      900: "#C69749",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
      },
    },
  },
  components: {
    Input: {},
    Button: {
      baseStyle: {
        bg: "brand.200",
      },
    },
  },
});

export default lightTheme;
