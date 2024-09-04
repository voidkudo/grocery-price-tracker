import { GroceryItem } from "../types/data";

export const category = {
  FRUITS_VEGETABLES: 'Fruits & Vegetables',
  PANTRY: 'Pantry',
  DAIRY_EGG: 'Dairy & Eggs',
  MEAT: 'Meat',
  SEAFOOD: 'Seafood',
  DELI: 'Deli',
  SPICES: 'Spices',
  SNACKS: 'Snacks',
  BAKERY: 'Bakery',
  DRINK: 'Drink',
  BAKING: 'Baking',
  STARCH: 'Starch',
  FROZEN_FOOD: 'Frozen Food',
  PERSONAL_CARE: 'Personal Care',
  HEALTH_CARE: 'HealthCare',
  HOUSEHOLD: 'Household',
};

export const groceryItemData: GroceryItem[] = [
  {
    name: 'Coke',
    category: category.DRINK,
    records: [
      {
        name: 'Coke Zero 2L',
        brand: 'Coca-Cola',
        price: 1.33,
        isTaxable: true,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Yogurt',
    category: category.DAIRY_EGG,
    records: [
      {
        name: 'Greek Yogert 650g',
        brand: 'OIKO',
        price: 5.49,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
      {
        name: 'Yogert 12x100g',
        brand: 'Activia',
        price: 5.5,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Milk',
    category: category.DAIRY_EGG,
    records: [
      {
        name: '2% Milk 4L',
        brand: 'Neilson',
        price: 5.99,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ]
  },
  {
    name: 'Tomato',
    category: category.FRUITS_VEGETABLES,
    records: [
      {
        name: 'Tomato 1kg',
        brand: '',
        price: 3.73,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Banana',
    category: category.FRUITS_VEGETABLES,
    records: [
      {
        name: 'Banana 1kg',
        brand: '',
        price: 1.3,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Kiwi',
    category: category.FRUITS_VEGETABLES,
    records: [
      {
        name: 'Kiwi',
        brand: '',
        price: 0.99,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Chicken Strips',
    category: category.FROZEN_FOOD,
    records: [
      {
        name: 'Chicken Strips 700g',
        brand: 'Janes',
        price: 4.79,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Chicken Leg',
    category: category.MEAT,
    records: [
      {
        name: 'Chicken Leg 1kg',
        brand: '',
        price: 3.9,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Bread',
    category: category.BAKERY,
    records: [
      {
        name: 'White Bread With Fibre 675g',
        brand: 'Wonder',
        price: 1.99,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
      {
        name: 'Whole Wheat Bread 675g',
        brand: 'Wonder',
        price: 1.99,
        isTaxable: false,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
  {
    name: 'Sunscreen',
    category: category.PERSONAL_CARE,
    records: [
      {
        name: 'Ultra Sport Sunscreen Lotion SPF50+ 240mL',
        brand: 'Banana Boat',
        price: 11.99,
        isTaxable: true,
        store: 'No Frills',
        date: '2024-09-03',
      },
    ],
  },
];