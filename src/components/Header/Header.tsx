"use client";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useColorScheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslator } from "@/hooks/useTranslator";

import {
  ActionsBox,
  HeaderLocale,
  BrandBox,
  DarkIcon,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerNavItem,
  HeaderWrapper,
  LightIcon,
  LogoImage,
  StyledAppBar,
  StyledToolbar,
  ThemeToggleButton,
  NavLink,
  NavBox,
  MenuButton,
} from "./styled";

const NAV_ITEMS = [
  {
    key: "navRates",
    href: "#rates",
    icon: <TagOutlinedIcon fontSize="small" />,
  },
  {
    key: "navCalculator",
    href: "#calculator",
    icon: <CalculateOutlinedIcon fontSize="small" />,
  },
  {
    key: "navMarkets",
    href: "#markets",
    icon: <ShowChartOutlinedIcon fontSize="small" />,
  },
  {
    key: "navWhy",
    href: "#why",
    icon: <VerifiedOutlinedIcon fontSize="small" />,
  },
  {
    key: "navFaq",
    href: "#faq",
    icon: <HelpOutlineOutlinedIcon fontSize="small" />,
  },
] as const;

export const Header = () => {
  const { mode, setMode } = useColorScheme();
  const translate = useTranslator();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isHomePage = pathname === "/";

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHomePage ? href : `/${href}`;
    }
    return href;
  };

  const toggleMode = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  };

  return (
    <>
      <HeaderWrapper>
        <StyledAppBar elevation={0}>
          <StyledToolbar>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <BrandBox>
                <LogoImage
                  src="/logo-wordmark.png"
                  alt={translate("appTitle")}
                />
              </BrandBox>
            </Link>

            <NavBox>
              {NAV_ITEMS.map(({ key, href }) => (
                <NavLink key={key} href={resolveHref(href)}>
                  {translate(key)}
                </NavLink>
              ))}
            </NavBox>

            <ActionsBox>
              <HeaderLocale>
                <LanguageSwitcher />
              </HeaderLocale>
              <ThemeToggleButton
                onClick={toggleMode}
                aria-label={translate("toggleTheme")}
                size="small"
              >
                <LightIcon fontSize="small" />
                <DarkIcon fontSize="small" />
              </ThemeToggleButton>
              <MenuButton
                onClick={() => setDrawerOpen(true)}
                aria-label="menu"
                size="small"
              >
                <MenuIcon fontSize="small" />
              </MenuButton>
            </ActionsBox>
          </StyledToolbar>
        </StyledAppBar>
      </HeaderWrapper>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent>
          <DrawerHeader>
            <BrandBox>
              <LogoImage src="/logo-wordmark.png" alt={translate("appTitle")} />
            </BrandBox>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              size="small"
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </DrawerHeader>

          {NAV_ITEMS.map(({ key, href, icon }) => (
            <DrawerNavItem
              key={key}
              href={resolveHref(href)}
              onClick={() => setDrawerOpen(false)}
            >
              {icon}
              {translate(key)}
            </DrawerNavItem>
          ))}

          <DrawerFooter>
            <LanguageSwitcher />
            <ThemeToggleButton
              onClick={toggleMode}
              aria-label={translate("toggleTheme")}
              size="small"
            >
              <LightIcon fontSize="small" />
              <DarkIcon fontSize="small" />
            </ThemeToggleButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
