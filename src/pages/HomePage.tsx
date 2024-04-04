import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useQuery, keepPreviousData } from '@tanstack/react-query';

import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

import { sortFromQueryParams, orderFromQueryParams } from '../utilities/helper-functions';
import { getTags } from '../utilities/http-requests';
import { SortType, OrderType } from '../utilities/data-types';

import ControlPanel from '../components/controlPanel/ControlPanel';
import TagsTable from '../components/table/TagsTable';
import LoadingInfoBox from '../components/loadingInfoBox/LoadingInfoBox';
import ErrorInfoBox from '../components/errorInfoBox/ErrorInfoBox';


export default function HomePage () {
  const [searchParams, setSearchParams] = useSearchParams();
  // Set state initial valus according to Query Params (if present)
  const [page, setPage] = useState(searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1 );
  const [pageSize, setPageSize] = useState(searchParams.get('pagesize') ? parseInt(searchParams.get('pagesize')!) : 20);
  const [sort, setSort] = useState<SortType>(sortFromQueryParams(searchParams));
  const [order, setOrder] = useState<OrderType>(orderFromQueryParams(searchParams));

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['tags', page, pageSize, sort, order],
    queryFn:() => getTags({page: page, pageSize: pageSize, sort: sort, order: order}),
    placeholderData: keepPreviousData, //keep old data until new data is present
    retry: 1,
    retryDelay: attempt => attempt * 1000,
    staleTime: 60 * 1000, // caching data for 60 sekund
  });

  useEffect(() => {
    setSearchParams({ page: page.toString(), pagesize: pageSize.toString(), order: order, sort: sort});
  }, [page, pageSize, sort, order]);

  const numberOfPages = (data?.total && data?.page_size) ? Math.ceil(data?.total / data?.page_size) : 10;

  const pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => setPage(page);
  const pageSizeHandler = (size: number) => setPageSize(size);
  const sortControlHandler = (value: SortType) => setSort(value);
  const orderControlHandler = (value: OrderType) => setOrder(value);

  const resetPage = () => {
    setPage(1);
    setPageSize(20);
    setSort("popular");
    setOrder("desc");
  }

  return (
    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
      <ControlPanel
        sort={sort}
        changeSortHandler={sortControlHandler}
        order={order}
        changeOrderHandler={orderControlHandler}
        pageSize={pageSize}
        changePageSizeHandler={pageSizeHandler}
      />
      {isError && <ErrorInfoBox error={error} resetPage={resetPage}/>}
      {isPending && <LoadingInfoBox/>}
      {data && <TagsTable tags={data.items}/>}
      {data &&
        <Pagination
          size="small"
          count={numberOfPages}
          shape="rounded"
          onChange={pageChangeHandler}
          page={page}
          sx={{marginX: "auto"}}
        />
      }
    </Container>
  )
}