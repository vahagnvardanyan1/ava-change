import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { COINGECKO_API_URL } from "@/constants/configs";
import { isRateLimited } from "@/lib/rateLimit";

interface CoinGeckoResponse {
  tether: {
    usd: number;
  };
}

export const GET = async (request: NextRequest) => {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const response = await fetch(
      `${COINGECKO_API_URL}?ids=tether&vs_currencies=usd`,
      { next: { revalidate: 30 } },
    );

    if (!response.ok) {
      throw new Error("CoinGecko API error");
    }

    const data: CoinGeckoResponse = await response.json();

    return NextResponse.json({
      usdtUsd: data.tether.usd,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch crypto rates" },
      { status: 500 },
    );
  }
};
