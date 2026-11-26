"use client";

import Alert from "@mui/material/Alert";

import { useRatesPolling } from "@/hooks/useRatesPolling";
import { useTranslator } from "@/hooks/useTranslator";
import type { IAppStore } from "@/store";
import { useAppStore } from "@/store";
import { RateCard } from "@/components/RateCard";

import { DashboardRoot, LiveBadge, LiveDot, CardsGrid } from "./styled";

const selector = (store: IAppStore) => ({
  usdtUsd: store.usdtUsd,
  usdAmd: store.usdAmd,
  rubAmd: store.rubAmd,
  loading: store.ratesLoading,
  error: store.ratesError,
  lastUpdated: store.ratesLastUpdated,
});

const RATE_CARDS = [
  { key: "usdtUsd", labelKey: "dashboardUsdtUsd", fractionDigits: 4 },
  { key: "usdAmd", labelKey: "dashboardUsdAmd", fractionDigits: 2 },
  { key: "rubAmd", labelKey: "dashboardRubAmd", fractionDigits: 2 },
  { key: "usdRub", labelKey: "dashboardUsdRub", fractionDigits: 2 },
] as const;

export const ExchangeDashboard = () => {
  useRatesPolling();
  const translate = useTranslator();
  const { usdtUsd, usdAmd, rubAmd, loading, error, lastUpdated } =
    useAppStore(selector);

  const usdRub = usdAmd && rubAmd ? usdAmd / rubAmd : 0;
  const values: Record<string, number> = { usdtUsd, usdAmd, rubAmd, usdRub };

  return (
    <DashboardRoot id="rates" className="animate-fade-in-up-delay-2">
      <LiveBadge>
        <LiveDot />
        {translate("dashboardLive")}
        {lastUpdated &&
          ` · ${translate("dashboardLastUpdated")} ${new Date(lastUpdated).toLocaleTimeString()}`}
      </LiveBadge>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {translate("dashboardError")}
        </Alert>
      )}

      <CardsGrid>
        {RATE_CARDS.map((card) => (
          <RateCard
            key={card.key}
            label={translate(card.labelKey)}
            value={values[card.key]}
            loading={loading}
            fractionDigits={card.fractionDigits}
          />
        ))}
      </CardsGrid>
    </DashboardRoot>
  );
};
