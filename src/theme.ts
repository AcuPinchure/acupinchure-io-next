"use client";
import { Lexend } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const lexend = Lexend({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

declare module "@mui/material/styles" {
  interface Palette {
    staticColor: {
      whiteText: string;
    };
  }

  interface PaletteOptions {
    staticColor?: {
      whiteText?: string;
    };
  }
}

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#5c3f09",
        },
        secondary: {
          main: "#274479",
        },
        staticColor: {
          whiteText: "#f5f5f5",
        },
        background: {
          default: "#291b00",
          paper: "#202020",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#ffc872",
        },
        secondary: {
          main: "#e4f0ff",
        },
        staticColor: {
          whiteText: "#f5f5f5",
        },
        background: {
          default: "#fff2dd",
          paper: "#f5f5f5",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  spacing: 8,

  typography: {
    fontFamily: [
      lexend.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 300,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
});

export default theme;
