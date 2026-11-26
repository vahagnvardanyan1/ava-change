"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "rgb(26, 128, 98)", contrastText: "#FFFFFF" },
        secondary: { main: "rgb(38, 161, 123)" },
        background: {
          default: "#F3F7F6",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#171717",
          secondary: "#666666",
        },
        divider: "rgba(0,0,0,0.08)",
      },
    },
    dark: {
      palette: {
        primary: { main: "rgb(38, 161, 123)", contrastText: "#FFFFFF" },
        secondary: { main: "rgb(80, 175, 149)" },
        background: {
          default: "#0A1411",
          paper: "#111D19",
        },
        text: {
          primary: "#ededed",
          secondary: "#8A9B96",
        },
        divider: "rgba(255,255,255,0.08)",
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto), var(--font-armenian), sans-serif",
    h1: {
      fontFamily:
        "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily:
        "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily:
        "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily:
        "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
