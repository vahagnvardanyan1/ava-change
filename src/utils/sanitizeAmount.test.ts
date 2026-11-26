import { describe, expect, it } from "vitest";

import { sanitizeAmount } from "./sanitizeAmount";

describe("sanitizeAmount", () => {
  it("keeps plain numbers", () => {
    expect(sanitizeAmount("1000")).toBe("1000");
  });

  it("reads a comma as the decimal separator", () => {
    expect(sanitizeAmount("12,5")).toBe("12.5");
  });

  it("keeps only the first decimal point", () => {
    expect(sanitizeAmount("1.2.3")).toBe("1.23");
  });

  it("drops letters, spaces and signs", () => {
    expect(sanitizeAmount("-1 000e3$")).toBe("10003");
  });

  it("allows an empty field", () => {
    expect(sanitizeAmount("")).toBe("");
  });
});
