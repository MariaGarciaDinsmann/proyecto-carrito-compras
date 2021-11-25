import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";


function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        if (count <= stock)
            onAdd(count);
        setCount(initial);
    };


    return (
        <Container >
            <Box>
                <ButtonGroup size="small" aria-label="small outlined button group" sx={{ width: '-webkit-fill-available' }}>
                    <Button onClick={handleDecrement}>-</Button>
                    <Button disabled sx={{ width: '-webkit-fill-available' }}>{count}</Button>
                    <Button onClick={handleIncrement}>+</Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Button color="secondary" variant="contained" startIcon={<ShoppingCartIcon />} margin="dense" sx={{ pr: 2, width: '-webkit-fill-available' }} onClick={handleAdd}>Agregar al carrito</Button>
            </Box>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Link to="/cart">
                    <Button color="primary" variant="contained" margin="dense" sx={{ pr: 2, width: '-webkit-fill-available', height: '50px' }}>Comprar ahora</Button>
                </Link>
            </Box>
        </Container>

    );

}


export default ItemCount;