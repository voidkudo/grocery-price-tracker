export interface GroceryItemPriceRecord {
  category: string,
  itemName: string,
  itemDetailName: string,
  brand: string,
  price: number,
  qty: number
  isTaxable: boolean,
  storeName: string,
  purchaseDate: string,
  isNewCategory: boolean,
  isNewItem: boolean,
  isNewItemDetail: boolean,
  isNewStore: boolean,
};