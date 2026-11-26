"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { TELEGRAM_URL } from "@/constants/configs";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslator } from "@/hooks/useTranslator";

import {
  FooterRoot,
  FooterTop,
  FooterBottom,
  FooterLogo,
  FooterBrand,
  FooterSocials,
} from "./styled";

export const Footer = () => {
  const translate = useTranslator();

  return (
    <FooterRoot component="footer">
      <Container maxWidth="lg">
        <FooterTop>
          <FooterBrand>
            <FooterLogo src="/logo-wordmark.png" alt={translate("appTitle")} />
          </FooterBrand>

          <FooterSocials>
            <IconButton
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={translate("footerTelegramCta")}
              size="small"
              sx={{ color: "var(--mui-palette-text-secondary)" }}
            >
              <TelegramIcon />
            </IconButton>
          </FooterSocials>
        </FooterTop>

        <FooterBottom>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {translate("footerCopyright")}
          </Typography>
          <LanguageSwitcher />
        </FooterBottom>
      </Container>
    </FooterRoot>
  );
};
