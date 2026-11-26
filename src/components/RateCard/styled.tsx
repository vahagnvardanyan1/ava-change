"use client";

import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const CardRoot = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2, 2.5),
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "rgba(var(--mui-palette-background-paperChannel) / 0.6)",
  backgroundImage: "none",
  backdropFilter: "blur(16px)",
  boxShadow: "none",
  transition: "border-color 0.3s, transform 0.3s",
  "&:hover": {
    borderColor: "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
    transform: "translateY(-2px)",
  },
}));

export const CardLabel = styled(Typography)({
  color: "var(--mui-palette-text-secondary)",
  fontWeight: 500,
  fontSize: 13,
  marginBottom: 4,
});

export const CardValue = styled(Typography)({
  fontFamily: "var(--font-display), var(--font-roboto), sans-serif",
  fontWeight: 600,
  fontSize: "1.5rem",
  color: "var(--mui-palette-text-primary)",
  fontVariantNumeric: "tabular-nums",
});

export const SkeletonValue = styled(Skeleton)({
  width: "70%",
  height: 36,
});
