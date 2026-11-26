export const SOURCE_CURRENCIES = ["USD", "AMD", "RUB"] as const;

export type SourceCurrency = (typeof SOURCE_CURRENCIES)[number];

export const TARGET_CURRENCY = "USDT";

export const CURRENCY_SYMBOLS: Record<SourceCurrency, string> = {
  USD: "$",
  AMD: "֏",
  RUB: "₽",
};
