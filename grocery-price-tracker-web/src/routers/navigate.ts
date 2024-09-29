import { createSearchParams, NavigateFunction } from "react-router-dom";


export const navigateToHomePage = (navigate: NavigateFunction) => {
  navigate('/');
};

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

export const navigateToItemDetailPage = (navigate: NavigateFunction, itemDetailName: string) => {
  navigate({
    pathname: '/itemDetail',
    search: createSearchParams({
      value: itemDetailName
    }).toString()
  });
};

export const navigateToSearchPage = (navigate: NavigateFunction, searchValue: string) => {
  navigate({
    pathname: '/search',
    search: createSearchParams({
      value: searchValue
    }).toString()
  });
};

export const navigateToCreateItemPage = (navigate: NavigateFunction) => {
  navigate('/createNewRecord');
};