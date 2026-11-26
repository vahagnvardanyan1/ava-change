// Keeps what a user types into the amount field a plain decimal: digits and one dot.
// A comma is read as the decimal separator, as typed on hy/ru keyboards.
export const sanitizeAmount = (raw: string): string => {
  const digitsAndDot = raw.replace(/,/g, ".").replace(/[^\d.]/g, "");
  const [whole, ...fraction] = digitsAndDot.split(".");

  return fraction.length ? `${whole}.${fraction.join("")}` : whole;
};
