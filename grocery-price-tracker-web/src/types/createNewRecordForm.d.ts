export interface GroceryItemPriceRecord {
  category: string,
  itemName: string,
  itemDesc: string,
  brand: string,
  price: number,
  qty: number
  isTaxable: boolean,
  storeName: string,
  purchaseDate: string
  isNewCategory: boolean,
  isNewItem: boolean,
  isNewStore: boolean,
};