"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const DashboardRoot = styled(Box)({
  scrollMarginTop: 96,
});

export const LiveBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1.75),
  marginBottom: theme.spacing(2),
  borderRadius: 999,
  fontSize: 13,
  color: "var(--mui-palette-text-secondary)",
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "rgba(var(--mui-palette-background-paperChannel) / 0.6)",
}));

export const LiveDot = styled(Box)({
  width: 7,
  height: 7,
  borderRadius: "50%",
  backgroundColor: "var(--mui-palette-primary-main)",
  animation: "pulseGlow 2s ease-in-out infinite",
});

export const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: theme.spacing(1.5),
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(2),
  },
}));
