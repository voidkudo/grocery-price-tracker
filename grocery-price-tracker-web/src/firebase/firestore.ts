import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, Timestamp } from "firebase/firestore"
import { firestore } from "./firebase"
import { FireStoreBase, FireStoreCategoryDoc, FireStoreItemDoc, FireStoreItemPriceRecord, } from "../types/firestore";

export const addCategoryOption = async (categoryName: string, username: string) => {
  const categoryDoc: FireStoreCategoryDoc = {
    creationTimestamp: Timestamp.now(),
    createdBy: username,
    items: []
  };
  setDoc(doc(firestore, 'categories', categoryName), categoryDoc);
};

export const getCategoryOptions = async () => {
  let categories: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'categories'));

  snapshot.forEach(doc => categories.push(doc.id));
  return categories;
};

export const addItemOptionByCategory = async (itemName: string, categoryName: string, username: string) => {
  const itemDoc: FireStoreItemDoc = {
    category: categoryName,
    creationTimestamp: Timestamp.now(),
    createdBy: username,
    priceRecords: [],
  };
  setDoc(doc(firestore, 'categories', categoryName), { items: arrayUnion(itemName) })
  setDoc(doc(firestore, 'items', itemName), itemDoc);
};

export const getItemOptionsByCategory = async (categoryName: string) => {
  let items: string[] = [];
  const snapshot = await getDoc(doc(firestore, 'categories', categoryName));
  if (snapshot.exists()) {
    items = (snapshot.data() as FireStoreCategoryDoc).items;
  }
  return items;
};

export const getAllItemOptions = async () => {
  let items: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'items'));

  snapshot.forEach(item => { items.push(item.id) });
  return items;
};

export const addStoreOption = async (storeName: string, username: string) => {
  const storeDoc: FireStoreBase = {
    creationTimestamp: Timestamp.now(),
    createdBy: username,
  };

  setDoc(doc(firestore, 'stores', storeName), storeDoc);
};

export const getStoreOptions = async () => {
  let stores: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'stores'));
  snapshot.forEach(store => stores.push(store.id))
  return stores;
};

export const addPriceRecordByItem = async (itemName: string, itemDesc: string, price: number, qty: number, storeName: string, isTaxable: boolean, purchaseDate: string, username: string) => {
  const priceRecord: FireStoreItemPriceRecord = {
    itemDesc: itemDesc,
    isTaxable: isTaxable,
    storeName: storeName,
    price: price,
    qty: qty,
    purchaseDate: purchaseDate,
    creationTimestamp: Timestamp.now(),
    createdBy: username,
  };
  setDoc(doc(firestore, 'items', itemName), { priceRecords: arrayUnion(priceRecord) });
};

export const getPriceRecordsByItem = async () => {
  let stores: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'stores'));
  snapshot.forEach(store => stores.push(store.id))
  return stores;
};