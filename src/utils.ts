import BN from "bn.js";
import JSBI from "jsbi";

import { TEN } from "./constants";
import { Percent } from "./percent";

/**
 * Bigint-like number.
 */
export declare type BigintIsh = JSBI | string | number | bigint | BN;

export function parseBigintIsh(bigintIsh: BigintIsh): JSBI {
  return bigintIsh instanceof JSBI
    ? bigintIsh
    : typeof bigintIsh === "bigint" || BN.isBN(bigintIsh)
    ? JSBI.BigInt(bigintIsh.toString())
    : JSBI.BigInt(bigintIsh);
}

/**
 * Creates the multipler for an amount of decimals.
 * @param decimals
 * @returns
 */
export const makeDecimalMultiplier = (decimals: number): JSBI => {
  if (decimals <= 18) {
    return JSBI.BigInt(10 ** decimals);
  }
  return JSBI.exponentiate(TEN, JSBI.BigInt(decimals));
};

/**
 * Computes APY from a percent, compounded `periods` times per year.
 * @param periodYield yield per period in %
 * @param periods defaults to 365
 * @returns APY
 */
export const computeAPY = (
  periodYield: Percent,
  periods = 365
): Percent | null => {
  const num =
    parseFloat(periodYield.add(1).asFraction.toFixed(6)) ** periods - 1;
  const numerator = Math.floor(num * 10_000_000_000);
  if (Number.isFinite(numerator)) {
    return new Percent(numerator, 10_000_000_000);
  }
  return null;
};
