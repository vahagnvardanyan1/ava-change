"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import InputBase from "@mui/material/InputBase";
import type { SelectProps } from "@mui/material/Select";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import type { SourceCurrency } from "@/constants/currencies";

export const CalcCard = styled(Card)(({ theme }) => ({
  scrollMarginTop: 96,
  padding: theme.spacing(3),
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "rgba(var(--mui-palette-background-paperChannel) / 0.7)",
  backgroundImage: "none",
  backdropFilter: "blur(20px)",
  boxShadow:
    "0 40px 80px -40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(var(--mui-palette-primary-mainChannel) / 0.08)",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  '[data-color-scheme="light"] &': {
    boxShadow: "0 30px 60px -30px rgba(26, 128, 98, 0.25)",
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(1, 2),
  marginBottom: theme.spacing(3),
}));

export const CalcTitle = styled(Typography)({
  fontFamily:
    "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
  fontWeight: 600,
});

export const FeeChip = styled(Box)(({ theme }) => ({
  whiteSpace: "nowrap",
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 600,
  color: "var(--mui-palette-primary-main)",
  backgroundColor: "rgba(var(--mui-palette-primary-mainChannel) / 0.12)",
}));

export const FieldBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2.5),
  borderRadius: 14,
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "rgba(var(--mui-palette-background-defaultChannel) / 0.6)",
  transition: "border-color 0.2s",
  "&:focus-within": {
    borderColor: "var(--mui-palette-primary-main)",
  },
}));

export const FieldLabel = styled(Typography)({
  fontSize: 13,
  color: "var(--mui-palette-text-secondary)",
  marginBottom: 6,
});

export const FieldRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

const amountText = {
  fontFamily:
    "var(--font-display), var(--font-roboto), var(--font-armenian), sans-serif",
  fontSize: "1.9rem",
  fontWeight: 600,
  fontVariantNumeric: "tabular-nums",
  lineHeight: 1.2,
} as const;

export const AmountInput = styled(InputBase)({
  flex: 1,
  minWidth: 0,
  ...amountText,
  "& input": {
    padding: 0,
  },
});

export const ResultValue = styled(Typography)({
  ...amountText,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "var(--mui-palette-primary-main)",
});

const pill = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexShrink: 0,
  padding: "6px 12px",
  borderRadius: 999,
  fontWeight: 600,
  fontSize: 15,
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "var(--mui-palette-background-paper)",
} as const;

export const CurrencySelect = styled((props: SelectProps<SourceCurrency>) => (
  <Select<SourceCurrency> {...props} />
))({
  ...pill,
  paddingRight: 4,
  "& .MuiSelect-select": {
    padding: "0 24px 0 0 !important",
  },
});

export const CurrencyOption = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 600,
});

export const CurrencySymbol = styled(Box)({
  width: 24,
  height: 24,
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  fontSize: 13,
  fontWeight: 700,
  color: "#FFFFFF",
  backgroundColor: "rgb(26, 128, 98)",
});

export const UsdtBadge = styled(Box)(pill);

export const UsdtIcon = styled("img")({
  width: 24,
  height: 24,
});

export const DividerCircle = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  marginInline: "auto",
  marginBlock: theme.spacing(-1.25),
  position: "relative",
  zIndex: 1,
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  color: "var(--mui-palette-primary-main)",
  border: "1px solid var(--mui-palette-divider)",
  backgroundColor: "var(--mui-palette-background-paper)",
}));

export const RateLine = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBlock: theme.spacing(2.5),
  fontSize: 13,
  color: "var(--mui-palette-text-secondary)",
}));

export const CtaButton = styled(Button)({
  paddingBlock: 14,
  fontSize: 16,
  fontWeight: 600,
  color: "#FFFFFF",
  background: "linear-gradient(135deg, rgb(80, 175, 149), rgb(38, 161, 123))",
  boxShadow: "0 12px 30px -12px rgba(38, 161, 123, 0.7)",
  "&:hover": {
    background: "linear-gradient(135deg, rgb(66, 160, 134), rgb(30, 140, 108))",
  },
}) as typeof Button;
