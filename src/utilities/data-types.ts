export interface StackExchangeTag {
  collectives?: any[],
  synonyms?: string[],
  last_activity_date?: Date,
  has_synonyms?: boolean,
  is_moderator_only?: boolean,
  is_required?: boolean,
  count: number,
  name: string,
  user_id?: number
}

export type SortType = "popular" | "activity" | "name";
export type OrderType = "asc" | "desc";

export type StackExchangeTagsApiResponse = {
  items: StackExchangeTag[],
  has_more: boolean,
  quota_max: number,
  quota_remaining: number,
  page: number,
  page_size: number,
  total: number
}