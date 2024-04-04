import { StackExchangeTagsApiResponse, OrderType, SortType } from "./data-types";

const stackExchangeTagsGetUrl = "https://api.stackexchange.com/2.3/tags";

export async function getTags ({page = 1, pageSize = 20, sort = "popular", order = "desc"}: {
  page: number, pageSize: number, sort: SortType, order: OrderType
}) {
  const query = `?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`;
  // Filter to get only name and count values for Tags ( https://api.stackexchange.com/docs/tags):
  const apiDataFilter = '&filter=!4-C9.H1YNh.sprLn2'; 
  const url = stackExchangeTagsGetUrl + query + apiDataFilter;

  const response = await fetch(url);

  // Data Mockup:
  // const response = await fetch('/tagApiResponseMockup.json');

  const responseData = await response.json();

  if (!response.ok) {
      const errorMessage = responseData.error_id === 403
        ? "Acces denied. Page above 25 requires access token or app key."
        : "An error occurred. Can't get tags data from Stack Exchange.";

      throw new Error(errorMessage);
  }
  
  return responseData as StackExchangeTagsApiResponse;
} 
