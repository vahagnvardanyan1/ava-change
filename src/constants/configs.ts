export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://ava-exchange.vercel.app";

// Add the username when ready, e.g. "https://t.me/avaexchange".
export const TELEGRAM_URL = "https://t.me/";

export const COINGECKO_API_URL =
  "https://api.coingecko.com/api/v3/simple/price";

export const COINGECKO_MARKETS_URL =
  "https://api.coingecko.com/api/v3/coins/markets";

export const CBA_API_URL = "https://cb.am/latest.json.php";

export const RATE_REFRESH_INTERVAL = 30_000;
