export interface GroceryItem {
  name: string,
  category: string,
  records: GroceryItemRecord[],
};

export interface GroceryItemRecord {
  desc: string,
  brand: string,
  price: number,
  qty: number
  isTaxable: boolean,
  store: string,
  purchaseDate: string
};