export type Cryptocurrency = {
  id: number;
  crypto_id: number;
  name: string;
  symbol: string;
  slug: string;
  logo: string;
  price: number;
  market_cap: number;
  last_updated: Date;
  created_at: Date;
};
