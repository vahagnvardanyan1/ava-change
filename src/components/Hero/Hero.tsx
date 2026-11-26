import { getTranslations } from "next-intl/server";

import Container from "@mui/material/Container";

import { Calculator } from "@/components/Calculator";
import { ExchangeDashboard } from "@/components/ExchangeDashboard";
import { fetchFeePercentage } from "@/services/settings";

import {
  HeroRoot,
  HeroGrid,
  HeroIntro,
  HeroAside,
  HeroTitle,
  TitleAccent,
  HeroSubtitle,
} from "./styled";

export const Hero = async () => {
  const [t, feePercentage] = await Promise.all([
    getTranslations(),
    fetchFeePercentage(),
  ]);

  return (
    <HeroRoot>
      <Container maxWidth="lg">
        <HeroGrid>
          <HeroIntro>
            <HeroTitle variant="h1" className="animate-fade-in-up">
              {t.rich("heroTitle", {
                mark: (chunks) => <TitleAccent>{chunks}</TitleAccent>,
              })}
            </HeroTitle>
            <HeroSubtitle className="animate-fade-in-up-delay-1">
              {t("heroSubtitle")}
            </HeroSubtitle>
            <ExchangeDashboard />
          </HeroIntro>
          <HeroAside>
            <Calculator feePercentage={feePercentage} />
          </HeroAside>
        </HeroGrid>
      </Container>
    </HeroRoot>
  );
};
