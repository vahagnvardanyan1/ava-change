"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: "1px solid var(--mui-palette-divider)",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(3),
  marginTop: theme.spacing(4),
})) as typeof Box;

export const FooterTop = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const FooterBrand = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const FooterLogo = styled("img")({
  display: "block",
  height: 32,
  width: "auto",
  '[data-color-scheme="dark"] &': {
    filter: "brightness(1.35)",
  },
});

export const FooterSocials = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  borderTop: "1px solid var(--mui-palette-divider)",
  paddingTop: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
}));
