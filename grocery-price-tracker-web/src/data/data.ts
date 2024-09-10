import { GroceryItem } from "../types/data";


export const getCategroies = async () => {
  const mockData = await fetch('./mockData.json').then(res => res.json());
  return mockData['categories'];
};

export const getGroceryItemNames = async () => {
  const mockData = await fetch('./mockData.json').then(res => res.json());
  console.log(mockData)
  return Object.keys(mockData['items']);
};

export const getGroceryItemByName = async (itemName: string) => {
  const mockData = await fetch('./mockData.json').then(res => res.json());
  return { ...mockData['items'][itemName], name: itemName } as GroceryItem;
};