export const getAveragePrice = (prices: number[]) => {
  return prices.reduce((total, num) => total + num) / prices.length;
};

export const getMinPrice = (prices: number[]) => {
  return prices.reduce((min, num) => Math.min(min, num));
};

export const getMaxPrice = (prices: number[]) => {
  return prices.reduce((max, num) => Math.max(max, num));
};