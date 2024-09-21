import { CollectionReference, Timestamp } from "firebase/firestore";

export interface FireStoreDoc {
  creationTimestamp: Timestamp,
  createdBy: string,
}

export interface FireStoreCategoryDoc extends FireStoreDoc {
  items: string[],
}

export interface FireStoreItemDoc extends FireStoreDoc {
  category: string
}