import type { SourceCurrency } from "@/constants/currencies";

export interface UsdtRates {
  usdtUsd: number;
  usdAmd: number;
  rubAmd: number;
}

export const convertToUsdt = ({
  amount,
  from,
  rates,
  feePercentage,
}: {
  amount: number;
  from: SourceCurrency;
  rates: UsdtRates;
  feePercentage: number;
}): number => {
  const { usdtUsd, usdAmd, rubAmd } = rates;

  // Rates are 0 until the first poll resolves.
  if (!usdtUsd || !usdAmd || !rubAmd) return 0;

  const usdPerUnit: Record<SourceCurrency, number> = {
    USD: 1,
    AMD: 1 / usdAmd,
    RUB: rubAmd / usdAmd,
  };

  const usdt = (amount * usdPerUnit[from]) / usdtUsd;

  return usdt * (1 - feePercentage / 100);
};
