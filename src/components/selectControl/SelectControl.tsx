import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectControl<Type extends string>({label, value, options, onChangeValue}: {
label: string, value: Type, options: Type[], onChangeValue: (value: Type) => void}) {

	const handleChange = (event: SelectChangeEvent) => {
		onChangeValue(event.target.value as Type);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id={`${label}-select-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-select-label`}
				id="demo-simple-select"
				value={value}
				label={label}
				onChange={handleChange}
			>
				{options.map((option, index) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
			</Select>
		</FormControl>
	)
}

