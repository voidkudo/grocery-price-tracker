import { GroceryItem } from "../types/data";

export const getCategroies = async () => {
  const categories = await fetch('./mockData.json')
    .then(res => res.json())
    .then(data => data['categories'] as string[]);
  return categories;
};

export const getAllGroceryItemNames = async () => {
  const items = await fetch('./mockData.json')
    .then(res => res.json())
    .then(data => data['items'] as GroceryItem[]);
  return items.map(item => item.name);
};

export const getGroceryItemNamesByCategory = async (categoryName: string) => {
  const items = await fetch('./mockData.json')
    .then(res => res.json())
    .then(data => data['items'] as GroceryItem[]);
  return items.filter(item => item.category === categoryName).map(item => item.name);
};

export const getGroceryItemByName = async (itemName: string) => {
  const items = await fetch('./mockData.json')
    .then(res => res.json())
    .then(data => data['items'] as GroceryItem[]);
  return items.find(item => item.name === itemName);
};