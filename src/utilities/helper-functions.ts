import { OrderType, SortType } from "./data-types";

export const sortFromQueryParams = (searchParams: URLSearchParams) => {
  const sortQuery = searchParams.get('sort');
  if (sortQuery && ["popular", "activity", "name"].includes(sortQuery)) {
    return sortQuery as SortType
  } else {
    return "popular" //default value for sorting
  }
}

export const orderFromQueryParams = (searchParams: URLSearchParams) => {
  const orderQuery = searchParams.get('order');
  if (orderQuery  && ["asc", "desc"].includes(orderQuery)) {
    return orderQuery as OrderType
  } else {
    return "desc" //default value for order
  }
}