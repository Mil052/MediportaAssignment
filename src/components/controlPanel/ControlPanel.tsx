import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import NumberInput from "./numberInput/NumberInput";
import SelectControl from "./selectControl/SelectControl";
import ToggleOrderBtn from "./toggleOrderBtn/ToggleOrderBtn";

import { SortType, OrderType } from '../../utilities/data-types';

export default function ControlPanel (
  {sort, changeSortHandler, order, changeOrderHandler, pageSize, changePageSizeHandler, backgroundColor }: {
    sort: SortType,
    changeSortHandler: (value: SortType) => void,
    order: OrderType,
    changeOrderHandler: (value: OrderType) => void,
    pageSize: number,
    changePageSizeHandler: (value: number) => void,
    backgroundColor?: string
  }) {

    return (
      <Toolbar
        sx={{
          gap: "2rem",
          padding: "1rem",
          flexDirection: {xs:'column', sm:'row'},
          justifyContent: "space-between",
          backgroundColor: backgroundColor
        }}
      >
        <Box 
          display="flex"
          gap={2}
          minWidth={288}
          maxWidth={320}
          width="100%"
          flexGrow={1}
          justifyContent="stretch"
        >
          <SelectControl
            label="sort by"
            value={sort}
            options={['activity', 'name', 'popular']}
            onValueChange={changeSortHandler}
          />
          <ToggleOrderBtn value={order} onValueChange={changeOrderHandler}/>
        </Box>
        <Box minWidth={160} maxWidth={320} width="100%" flexGrow={1}>
          <NumberInput
            label="Items per page"
            min={1}
            max={100}
            value={pageSize}
            onValueChange={changePageSizeHandler}
          />
        </Box>
      </Toolbar>
    )
}