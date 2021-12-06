import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Counter({ handleDecrement, handleIncrement, count }) {

    return (
        <ButtonGroup size="small" aria-label="small outlined button group" sx={{ width: '-webkit-fill-available' }}>
            <Button onClick={handleDecrement}>-</Button>
            <Button disabled style={{ width: '-webkit-fill-available', color:"#009688" }}>{count}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>

    )
}