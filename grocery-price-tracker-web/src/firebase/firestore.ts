import { arrayUnion, collection, doc, getDoc, getDocs, limit, query, setDoc, startAt, Timestamp } from "firebase/firestore"
import { firestore } from "./firebase"
import { FireStoreBase, FireStoreCategoryDoc, FireStoreItemDoc, FireStoreItemDetailDoc, FireStoreItemDetailPriceRecord } from "../types/firestore";

export const addCategoryOption = async (categoryName: string, username: string) => {
  const categoryDoc: FireStoreCategoryDoc = {
    creationTimestamp: Timestamp.now(),
    createdBy: username,
    items: []
  };
  setDoc(doc(firestore, 'categories', categoryName), categoryDoc, { merge: true });
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
    itemDetails: [],
  };
  setDoc(doc(firestore, 'categories', categoryName), { items: arrayUnion(itemName) }, { merge: true })
  setDoc(doc(firestore, 'items', itemName), itemDoc, { merge: true });
};

export const getItemOptionsByCategory = async (categoryName: string) => {
  let items: string[] = [];
  const snapshot = await getDoc(doc(firestore, 'categories', categoryName));
  if (snapshot.exists()) {
    items = (snapshot.data() as FireStoreCategoryDoc).items;
  }
  return items;
};

export const addStoreOption = async (storeName: string, username: string) => {
  const storeDoc: FireStoreBase = {
    creationTimestamp: Timestamp.now(),
    createdBy: username,
  };
  setDoc(doc(firestore, 'stores', storeName), storeDoc, { merge: true });
};

export const getStoreOptions = async () => {
  let stores: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'stores'));
  snapshot.forEach(store => stores.push(store.id))
  return stores;
};

export const addItemDetailByItem = async (itemDetailName: string, itemName: string, username: string) => {
  const itemDetail: FireStoreItemDetailDoc = {
    item: itemName,
    priceRecords: [],
    creationTimestamp: Timestamp.now(),
    createdBy: username,
  };
  setDoc(doc(firestore, 'items', itemName), { itemDetails: arrayUnion(itemDetailName) }, { merge: true })
  setDoc(doc(firestore, 'itemDetails', itemDetailName), itemDetail, { merge: true });
};

export const getItemDetailOptionsByItem = async (itemName: string) => {
  let itemDetails: string[] = [];
  const snapshot = await getDoc(doc(firestore, 'items', itemName));
  if (snapshot.exists()) {
    itemDetails = (snapshot.data() as FireStoreItemDoc).itemDetails;
  }
  return itemDetails;
};

export const getAllItemDetailOptions = async (maxItemCount: number = 10) => {
  let itemDetails: string[] = [];
  const snapshot = await getDocs(query(collection(firestore, 'itemDetails'), limit(maxItemCount)));
  snapshot.forEach(itemDetail => itemDetails.push(itemDetail.id));
  return itemDetails;
};

export const getAllItemDetailOptionsByItem = async (itemDetailName: string, maxItemCount: number = 10) => {
  let itemDetails: string[] = [];
  const snapshot = await getDocs(query(collection(firestore, 'itemDetails'), startAt(itemDetailName), limit(maxItemCount)));
  snapshot.forEach(itemDetail => itemDetails.push(itemDetail.id));
  return itemDetails;
};

export const addPriceRecordByItemDetails = async (brand: string, isTaxable: boolean, price: number, qty: number, storeName: string, purchaseDate: string, itemDetailName: string, username: string) => {
  const priceRecord: FireStoreItemDetailPriceRecord = {
    brand: brand,
    isTaxable: isTaxable,
    price: price,
    qty: qty,
    storeName: storeName,
    purchaseDate: purchaseDate,
    creationTimestamp: Timestamp.now(),
    createdBy: username,
  }

  setDoc(doc(firestore, 'itemDetails', itemDetailName), { priceRecords: arrayUnion(priceRecord) }, { merge: true });
};

export const getPriceRecordsByItem = async () => {
  let stores: string[] = [];
  const snapshot = await getDocs(collection(firestore, 'stores'));
  snapshot.forEach(store => stores.push(store.id))
  return stores;
};

export const getItemDetailByName = async (itemDetailName: string) => {
  const snapshot = await getDoc(doc(firestore, 'itemDetails', itemDetailName));
  if (!snapshot.exists()) {
    return undefined;
  }
  return snapshot.data() as FireStoreItemDetailDoc;
};