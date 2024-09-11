import { createSearchParams, NavigateFunction } from "react-router-dom";

export const navigateToCategoryPage = (navigate: NavigateFunction, category: string) => {
  navigate({
    pathname: '/category',
    search: createSearchParams({
      value: category
    }).toString()
  });
};

export const navigateToItemPage = (navigate: NavigateFunction, itemName: string) => {
  navigate({
    pathname: '/item',
    search: createSearchParams({
      value: itemName
    }).toString()
  });
};