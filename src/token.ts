/**
 * Standard interface for a token.
 */
export interface Token<T extends Token<T>> {
  address: string;
  decimals: number;
  equals: (other: T) => boolean;
}
