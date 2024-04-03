import { useState } from 'react';

import Box from '@mui/material/Box';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export default function NumberInput ({label, min, max, value, onValueChange}: {
  label: string, min: number, max: number, value: number, onValueChange: (value: number) => void
  }) {
    const [inputValue, setInputValue] = useState<number>(value);

    const submitHandler = (e: React.SyntheticEvent) => {
      e.preventDefault();
      onValueChange(inputValue);
    }

    const valueStep = 5; 

    const minus = () => {
      setInputValue(v => {
        let newValue = (v % valueStep) <= 0 ? v - (v % valueStep) - valueStep : v - (v % valueStep);
        if (newValue < min) newValue = min;
        onValueChange(newValue);
        return newValue;
      });
    }

    const plus = () => {
      setInputValue(v => {
        let newValue = (v % valueStep) >= 0 ? v - (v % valueStep) + valueStep : v - (v % valueStep);
        if (newValue > max) newValue = max;
        onValueChange(newValue);
        return newValue;
      });
    }

    const OutlinedFieldset = styled('fieldset') ({
      border: "1px solid rgba(0, 0, 0, 0.23)",
      padding: "7px",
      borderRadius: 4,
      width: "100%",
      minWidth: "10rem",
      '&:hover': {borderColor: "rgba(0, 0, 0, 1)"},
      '&:focus-within': {border: "2px solid #1976d2", padding: "6px"},
      '& legend': {
        fontSize: "0.75rem",
        height: "0",
        padding: "0 4px",
        visibility: "hidden"
      },
      '& label': {
        color: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: "-8px",
        left: "8px",
        fontSize: "0.75rem",
        lineHeight: "1rem",
        padding: "0 4px"
      },
      '&:focus-within label': {color: "#1976d2"}
    });

    return (
      <form
        style={{width: "100%", height: "56px" , position: "relative"}}
        onSubmit={submitHandler}
      >
        <OutlinedFieldset>
          <legend>{label}</legend>
          <label>{label}</label>
          <Box
            display= "flex"
            justifyContent= "stretch"
            gap= "1rem"
            height="40px"
          >
            <IconButton onClick={minus} aria-label="decrease number" sx={{borderRadius: 1}}>
              <ArrowLeftIcon/>
            </IconButton>
            <input 
              type="number"
              min={min} max={max}
              value={inputValue}
              onChange={e => setInputValue(parseInt(e.target.value))}
              style={{height: "40px", minWidth: "3rem", padding: "8px 0", flexGrow: "1", textAlign: "center", fontSize: "1rem"}}
            />
            <IconButton onClick={plus} aria-label="increase number" sx={{borderRadius: 1}}>
              <ArrowRightIcon/>
            </IconButton>
          </Box>
        </OutlinedFieldset>
      </form>
    )
}