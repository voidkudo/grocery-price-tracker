import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { FireStoreMetadataOptions } from "../types/firestore";

const optionsRef = doc(firestore, 'metadata', 'options');

export const addCategory = async (categoryName: string) => {
  updateDoc(optionsRef, 'categories', arrayUnion(categoryName))
};

export const getCategories = async () => {
  let categories: string[] = [];
  const optionsSnap = await getDoc(optionsRef);

  if (optionsSnap.exists()) {
    categories = (optionsSnap.data() as FireStoreMetadataOptions).categories;
  }

  return categories;
};

export const addItem = async (itemName: string) => {
  updateDoc(optionsRef, 'items', arrayUnion(itemName))
};

export const getAllItems = async () => {
  let categories: string[] = [];
  const optionsSnap = await getDoc(optionsRef);

  if (optionsSnap.exists()) {
    categories = (optionsSnap.data() as FireStoreMetadataOptions).items;
  }

  return categories;
};

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