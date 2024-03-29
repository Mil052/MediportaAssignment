import { StackExchangeTagsApiResponse, OrderType, SortType } from "./data-types";

const stackExchangeTagsGetUrl = "https://api.stackexchange.com/2.3/tags";

export async function getTags ({page = 1, pageSize = 20, sortBy = "popular", order = "desc"}: {
  page: number, pageSize: number, sortBy: SortType, order: OrderType
}) {
  const query = `?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sortBy}&site=stackoverflow`;
  const apiDataFilter = '&filter=!4-C9.H1YNh.sprLn2'; // get only name and count values for Tags - https://api.stackexchange.com/docs/tags

  // const response = await fetch(stackExchangeTagsGetUrl + query + apiDataFilter);  <- real query

  const response = await fetch('/tagApiResponseMockup.json'); // <- Mockup of Data from Stack Exchange Api

  if (!response.ok) {
      throw new Error("An error occurred. Can't get tags data from Stack Exchange.");
  }
  const responseData = await response.json();
  console.log(responseData);

  return responseData as StackExchangeTagsApiResponse;
} 
