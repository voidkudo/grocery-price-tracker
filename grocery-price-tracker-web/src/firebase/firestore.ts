import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { FireStoreMetadataOptions } from "../types/firestore";

const optionsRef = doc(firestore, 'metadata', 'options');

export const addStore = async (storeName: string) => {
  updateDoc(optionsRef, 'stores', arrayUnion(storeName))
};

export const getStores = async () => {
  let stores: string[] = [];
  const optionsSnap = await getDoc(optionsRef);

  if (optionsSnap.exists()) {
    stores = (optionsSnap.data() as FireStoreMetadataOptions).stores;
  }

  return stores;
};