/**
 * Zero bigint.
 */
export const ZERO = BigInt(0);

/**
 * One bigint.
 */
export const ONE = BigInt(1);

/**
 * 10 bigint.
 */
export const TEN = BigInt(10);

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const MAX_U64 = BigInt("0xffffffffffffffff");
export const MAX_U256 = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
);
