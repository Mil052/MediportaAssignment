import { useState } from 'react';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';

export default function NumberInput ({label, min, max, value, onChangeValue}: {
label: string, min: number, max: number, value: number, onChangeValue: (value: number) => void}) {
  const [inputValue, setInputValue] = useState<number>(value);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onChangeValue(inputValue);
  }

  const valueStep = 5; 

  const minus = () => {
    setInputValue(v => {
      let newValue = (v % valueStep) <= 0 ? v - (v % valueStep) - valueStep : v - (v % valueStep);
      if (newValue < min) newValue = min;
      onChangeValue(newValue);
      return newValue;
    });
  }

  const plus = () => {
    setInputValue(v => {
      let newValue = (v % valueStep) >= 0 ? v - (v % valueStep) + valueStep : v - (v % valueStep);
      if (newValue > max) newValue = max;
      onChangeValue(newValue);
      return newValue;
    });
  }

  return (
    <form style={{backgroundColor: "green", position: "relative"}} onSubmit={submitHandler}>
      <fieldset style={{position: "absolute", bottom: "0", border: "1px solid black", padding: "8px", borderRadius: 4, width: "100%", height: "calc(100% + 7px)"}}>
        <legend style= {{fontSize: "0.75rem", color: "rgba(0, 0, 0, 0.6)"}}>{label}</legend>
      </fieldset>
      <div style={{display: "flex", padding: "4px"}}>
        <IconButton onClick={minus} aria-label="decrease number of items">
          <ArrowLeftIcon/>
        </IconButton>
        <input type="number" min={min} max={max} value={inputValue} onChange={e => setInputValue(parseInt(e.target.value))} style={{height: "3rem"}}/>
        <IconButton onClick={plus} aria-label="increase number of items">
          <ArrowRightIcon/>
        </IconButton>
      </div>
    </form>
  )
}