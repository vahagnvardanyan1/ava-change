"use client";

import { useMemo, useState } from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuItem from "@mui/material/MenuItem";

import type { SourceCurrency } from "@/constants/currencies";
import type { IAppStore } from "@/store";
import { TELEGRAM_URL } from "@/constants/configs";
import {
  CURRENCY_SYMBOLS,
  SOURCE_CURRENCIES,
  TARGET_CURRENCY,
} from "@/constants/currencies";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";
import { useTranslator } from "@/hooks/useTranslator";
import { useAppStore } from "@/store";
import { convertToUsdt } from "@/utils/convertToUsdt";
import { formatNumber } from "@/utils/formatNumber";

import {
  CalcCard,
  CardHeader,
  CalcTitle,
  FeeChip,
  FieldBox,
  FieldLabel,
  FieldRow,
  AmountInput,
  ResultValue,
  CurrencySelect,
  CurrencyOption,
  CurrencySymbol,
  UsdtBadge,
  UsdtIcon,
  DividerCircle,
  RateLine,
  CtaButton,
} from "./styled";

interface CalculatorProps {
  feePercentage: number;
}

const ratesSelector = (s: IAppStore) => ({
  usdtUsd: s.usdtUsd,
  usdAmd: s.usdAmd,
  rubAmd: s.rubAmd,
});

export const Calculator = ({ feePercentage }: CalculatorProps) => {
  const translate = useTranslator();
  const [from, setFrom] = useState<SourceCurrency>("USD");
  const [amount, setAmount] = useState("1000");

  const rates = useAppStore(ratesSelector);

  const result = useMemo(
    () => convertToUsdt({ amount: Number(amount), from, rates, feePercentage }),
    [amount, from, rates, feePercentage],
  );

  const unitRate = useMemo(
    () => convertToUsdt({ amount: 1, from, rates, feePercentage }),
    [from, rates, feePercentage],
  );

  const animatedResult = useAnimatedNumber({ target: result });

  return (
    <CalcCard id="calculator" className="animate-fade-in-up-delay-1">
      <CardHeader>
        <CalcTitle variant="h5">{translate("calculatorTitle")}</CalcTitle>
        <FeeChip>
          {translate("calculatorFeeBadge", { fee: feePercentage })}
        </FeeChip>
      </CardHeader>

      <FieldBox>
        <FieldLabel>{translate("calculatorYouPay")}</FieldLabel>
        <FieldRow>
          <AmountInput
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            inputProps={{
              min: 0,
              inputMode: "decimal",
              "aria-label": translate("calculatorYouPay"),
            }}
          />
          <CurrencySelect
            value={from}
            onChange={(e) => setFrom(e.target.value as SourceCurrency)}
            variant="standard"
            disableUnderline
            renderValue={(value) => (
              <CurrencyOption>
                <CurrencySymbol>{CURRENCY_SYMBOLS[value]}</CurrencySymbol>
                {value}
              </CurrencyOption>
            )}
          >
            {SOURCE_CURRENCIES.map((c) => (
              <MenuItem key={c} value={c}>
                <CurrencyOption>
                  <CurrencySymbol>{CURRENCY_SYMBOLS[c]}</CurrencySymbol>
                  {c}
                </CurrencyOption>
              </MenuItem>
            ))}
          </CurrencySelect>
        </FieldRow>
      </FieldBox>

      <DividerCircle aria-hidden>
        <ArrowDownwardIcon fontSize="small" />
      </DividerCircle>

      <FieldBox>
        <FieldLabel>{translate("calculatorYouGet")}</FieldLabel>
        <FieldRow>
          <ResultValue aria-live="polite">
            {formatNumber({
              value: animatedResult,
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </ResultValue>
          <UsdtBadge>
            <UsdtIcon src="/usdt.svg" alt="" />
            {TARGET_CURRENCY}
          </UsdtBadge>
        </FieldRow>
      </FieldBox>

      <RateLine>
        <span>
          {translate("calculatorRate", {
            currency: from,
            rate: formatNumber({
              value: unitRate,
              maximumFractionDigits: from === "USD" ? 4 : 6,
            }),
          })}
        </span>
        <span>{translate("calculatorFee", { fee: feePercentage })}</span>
      </RateLine>

      <CtaButton
        variant="contained"
        size="large"
        fullWidth
        startIcon={<TelegramIcon />}
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {translate("calculatorCta")}
      </CtaButton>
    </CalcCard>
  );
};
