export type PostAddToPortfolioBody = {
  crypto_id: number;
  price: number;
  amount: number;
};

export type Portfolio = {
  amount: number;
  total_price: number;
  crypto_id: number;
  name: string;
  symbol: string;
  logo: string;
  now_price: number;
  profit: number;
};
