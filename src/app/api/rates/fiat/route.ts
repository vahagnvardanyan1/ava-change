import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { CBA_API_URL } from "@/constants/configs";
import { isRateLimited } from "@/lib/rateLimit";

interface CbaResponse {
  [currency: string]: string | null;
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
    const response = await fetch(CBA_API_URL, { next: { revalidate: 30 } });

    if (!response.ok) {
      throw new Error("CBA API error");
    }

    const data: CbaResponse = await response.json();

    const usdAmd = parseFloat(data.USD ?? "0");
    const rubAmd = parseFloat(data.RUB ?? "0");

    return NextResponse.json({
      usdAmd,
      rubAmd,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch fiat rates" },
      { status: 500 },
    );
  }
};
