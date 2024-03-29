import { useQuery } from '@tanstack/react-query';
import { getTags } from '../utilities/http-requests';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { sortByFromQueryParams, orderFromQueryParams } from '../utilities/helper-functions';
import { SortType, OrderType } from '../utilities/data-types';

import TagsTable from '../components/table/TagsTable';
import Pagination from '@mui/material/Pagination';
import Toolbar from '@mui/material/Toolbar';

import NumberInput from '../components/numberInput/numberInput';

// const query = `?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sortBy}&site=stackoverflow`;

export default function HomePage () {
  const [searchParams, setSearchParams] = useSearchParams();
  // Set state initial valus according to Query Params (if present)
  const [page, setPage] = useState(searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1 );
  const [pageSize, setPageSize] = useState(searchParams.get('pagesize') ? parseInt(searchParams.get('pagesize')!) : 20);
  const [sortBy, setSortBy] = useState<SortType>(sortByFromQueryParams(searchParams));
  const [order, setOrder] = useState<OrderType>(orderFromQueryParams(searchParams));

  const {data, isError, failureCount, refetch} = useQuery({
    queryKey: ['tags', page, pageSize, sortBy, order],
    queryFn:() => getTags({page: page, pageSize: pageSize, sortBy: sortBy, order: order}),
    retry: 3,
    retryDelay: attempt => attempt * 1000,
    staleTime: 60 * 1000 // caching data for 60 sekund
  });

  useEffect(() => {
    setSearchParams({ page: page.toString(), pagesize: pageSize.toString(), order: order, sort: sortBy});
  }, [page, pageSize, sortBy, setOrder]);

  const numberOfPages = (data?.total && data?.page_size) ? Math.ceil(data?.total / data?.page_size) : 10;

  const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => setPage(page);
  const pageSizeHandler = (size: number) => setPageSize(size);

  return (
    <>
      <div>Welcome on HOME PAGE</div>
      <Toolbar>
        <NumberInput label="Items per page:" min={1} max={100} value={pageSize} onChange={pageSizeHandler}/>
      </Toolbar>
      {data &&
        <div>
          <TagsTable tags={data.items}/>
          <Pagination count={numberOfPages} shape="rounded" onChange={pageChangeHandler} page={page}/>
        </div>
      }
    </>
  )
}