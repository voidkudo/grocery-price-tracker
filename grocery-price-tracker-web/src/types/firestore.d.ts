import { CollectionReference, Timestamp } from "firebase/firestore";

export interface FireStoreBase {
  creationTimestamp: Timestamp,
  createdBy: string,
}

export interface FireStoreCategoryDoc extends FireStoreBase {
  items: string[],
}

export interface FireStoreItemDoc extends FireStoreBase {
  category: string,
  priceRecords: FireStoreItemPriceRecord[],
}

export interface FireStoreItemPriceRecord extends FireStoreBase {
  itemDesc: string,
  brand?: string,
  isTaxable: boolean,
  price: number,
  qty: number,
  storeName: string,
  purchaseDate: string,
}