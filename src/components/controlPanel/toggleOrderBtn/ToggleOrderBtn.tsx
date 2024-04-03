import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';

import { OrderType } from '../../../utilities/data-types';

export default function ToggleOrderBtn({value, onValueChange}: {value: OrderType , onValueChange: (value: OrderType ) => void}) {

	const handleChange = (event: React.MouseEvent, value: OrderType) => onValueChange(value);

	return (
		<ToggleButtonGroup
			value={value}
			exclusive
			onChange={handleChange}
			aria-label="sort order"
		>
			<Tooltip title="Descending">
				<ToggleButton value="desc" aria-label="descending">
					<ArrowDownwardIcon />
				</ToggleButton>
			</Tooltip>
			<Tooltip title="Ascending">
				<ToggleButton value="asc" aria-label="ascending">
					<ArrowUpwardIcon />
				</ToggleButton>
			</Tooltip>
		</ToggleButtonGroup>
	);
}