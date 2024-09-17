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

export interface CreateGroceryItemRecord extends GroceryItemRecord {
  category: string,
  name: string,
  isNewCategory: boolean,
  isNewItem: boolean,
  isNewStore: boolean,
};