export interface GroceryItem {
  name: string,
  category: string,
  records: GroceryItemRecord[],
};

export interface GroceryItemRecord {
  name: string,
  brand: string,
  price: number,
  isTaxable: boolean,
  store: string,
  date: string,
};