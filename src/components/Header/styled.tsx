"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiIconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1.5, 2, 0),
}));

export const StyledAppBar = styled(MuiAppBar)({
  position: "static",
  backgroundColor: "rgba(var(--mui-palette-background-defaultChannel) / 0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid",
  borderColor: "var(--mui-palette-divider)",
  color: "var(--mui-palette-text-primary)",
  borderRadius: 50,
  marginInline: "auto",
  maxWidth: 900,
  width: "100%",
  boxShadow: "none",
});

export const StyledToolbar = styled(MuiToolbar)(({ theme }) => ({
  maxWidth: 1200,
  width: "100%",
  marginInline: "auto",
  paddingInline: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingInline: theme.spacing(3),
  },
}));

export const BrandBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const LogoImage = styled("img")(({ theme }) => ({
  display: "block",
  height: 22,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    height: 28,
  },
  [theme.breakpoints.up("md")]: {
    height: 36,
  },
  // The wordmark's dark-teal lettering needs a lift on the dark background.
  '[data-color-scheme="dark"] &': {
    filter: "brightness(1.35)",
  },
}));

export const NavBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: theme.spacing(3),
  marginLeft: "auto",
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const NavLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
  transition: "color 0.2s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const ActionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  [theme.breakpoints.up("md")]: {
    marginLeft: 0,
  },
  marginLeft: "auto",
}));

// Small phones can't fit the picker next to the logo; the drawer has its own.
export const HeaderLocale = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

// 44px is the minimum comfortable tap target on touch screens.
export const ThemeToggleButton = styled(MuiIconButton)({
  width: 44,
  height: 44,
  color: "var(--mui-palette-text-secondary)",
  "&:hover": {
    color: "var(--mui-palette-text-primary)",
  },
});

export const MenuButton = styled(MuiIconButton)(({ theme }) => ({
  display: "inline-flex",
  width: 44,
  height: 44,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const LightIcon = styled(LightModeIcon)({
  display: "none",
  '[data-color-scheme="dark"] &': {
    display: "inline-flex",
  },
});

export const DarkIcon = styled(DarkModeIcon)({
  display: "none",
  '[data-color-scheme="light"] &': {
    display: "inline-flex",
  },
});

export const DrawerContent = styled(Box)(() => ({
  width: 280,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--mui-palette-background-default)",
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 2.5),
  borderBottom: "1px solid var(--mui-palette-divider)",
}));

export const DrawerNavItem = styled(MuiLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2.5),
  margin: theme.spacing(0.5, 1.5),
  borderRadius: 12,
  color: "var(--mui-palette-text-primary)",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
  transition: "background-color 0.2s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "var(--mui-palette-action-hover)",
  },
}));

export const DrawerFooter = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  padding: theme.spacing(2, 2.5),
  borderTop: "1px solid var(--mui-palette-divider)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
