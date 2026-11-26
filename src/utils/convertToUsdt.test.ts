import { describe, expect, it } from "vitest";

import { convertToUsdt } from "./convertToUsdt";

const rates = { usdtUsd: 1, usdAmd: 400, rubAmd: 5 };

describe("convertToUsdt", () => {
  it("converts USD 1:1 when USDT is at peg and no fee", () => {
    expect(
      convertToUsdt({ amount: 100, from: "USD", rates, feePercentage: 0 }),
    ).toBe(100);
  });

  it("converts AMD through the USD/AMD rate", () => {
    expect(
      convertToUsdt({ amount: 4000, from: "AMD", rates, feePercentage: 0 }),
    ).toBe(10);
  });

  it("converts RUB through RUB/AMD and USD/AMD", () => {
    expect(
      convertToUsdt({ amount: 800, from: "RUB", rates, feePercentage: 0 }),
    ).toBe(10);
  });

  it("divides by the USDT price when off peg", () => {
    expect(
      convertToUsdt({
        amount: 100,
        from: "USD",
        rates: { ...rates, usdtUsd: 0.5 },
        feePercentage: 0,
      }),
    ).toBe(200);
  });

  it("deducts the fee percentage", () => {
    expect(
      convertToUsdt({ amount: 100, from: "USD", rates, feePercentage: 2.5 }),
    ).toBeCloseTo(97.5);
  });

  it("returns 0 while rates are not loaded", () => {
    expect(
      convertToUsdt({
        amount: 100,
        from: "USD",
        rates: { usdtUsd: 0, usdAmd: 0, rubAmd: 0 },
        feePercentage: 2.5,
      }),
    ).toBe(0);
  });
});
