import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconButton from '@mui/material/IconButton';

export default function NumberInput ({label, min, max, value, onChange}: {label: string, min: number, max: number, value: number, onChange: (value: number) => void}) {

  const submitHandler = (formData: FormData) => {
    console.log(formData);
  }

const minus = () => {

}

const plus = () => {
  
}

  return (
    <form>
      <label>{label}</label>
      <div style={{display: 'flex'}}>
        <IconButton onClick={}>
          <ArrowLeftIcon/>
        </IconButton>
        <input type="number" min={min} max={max} value={value}/>
        <IconButton>
          <ArrowRightIcon/>
        </IconButton>
      </div>
    </form>
  )
}