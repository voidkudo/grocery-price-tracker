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
  itemDetails: string[],
}

export interface FireStoreItemDetailDoc extends FireStoreBase {
  item: string,
  priceRecords: FireStoreItemDetailPriceRecord[],
}

export interface FireStoreItemDetailPriceRecord extends FireStoreBase {
  brand: string,
  isTaxable: boolean,
  price: number,
  qty: number,
  storeName: string,
  purchaseDate: string,
}