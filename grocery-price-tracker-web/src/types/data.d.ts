export interface GroceryItem {
  name: string,
  category: string,
  records: GroceryItemRecord[],
};

export interface GroceryItemRecord {
  detail: string,
  brand: string,
  price: number,
  qty: number
  isTaxable: boolean,
  store: string,
  purchaseDate: string,
  createTimestamp: number
};