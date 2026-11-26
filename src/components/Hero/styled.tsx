"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// Pulls the hero up under the sticky header so the spotlight starts behind it instead of cutting off below it.
const HEADER_OVERLAP = 96;

export const HeroRoot = styled(Box)({
  position: "relative",
  overflow: "hidden",
  isolation: "isolate",
  marginTop: -HEADER_OVERLAP,
  paddingTop: HEADER_OVERLAP,
  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background:
      "radial-gradient(ellipse 60% 45% at 70% 35%, rgba(38, 161, 123, 0.16), transparent 70%)",
    pointerEvents: "none",
  },
});

export const HeroGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(6),
  alignItems: "center",
  paddingBlock: theme.spacing(6, 8),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: theme.spacing(8),
    paddingBlock: theme.spacing(10, 12),
  },
}));

export const HeroIntro = styled(Box)({
  minWidth: 0,
});

export const HeroAside = styled(Box)(({ theme }) => ({
  minWidth: 0,
  // On phones the calculator comes first; the headline follows.
  [theme.breakpoints.down("md")]: {
    order: -1,
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.4rem",
  lineHeight: 1.08,
  marginBottom: theme.spacing(2.5),
  [theme.breakpoints.up("md")]: {
    fontSize: "3.6rem",
  },
})) as typeof Typography;

export const TitleAccent = styled("span")({
  background: "linear-gradient(90deg, rgb(80, 175, 149), rgb(38, 161, 123))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: "var(--mui-palette-text-secondary)",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  maxWidth: 480,
  marginBottom: theme.spacing(5),
}));
