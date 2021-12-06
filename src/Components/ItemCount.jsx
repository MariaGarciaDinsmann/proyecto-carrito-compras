import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import Counter from './Counter'


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

    const handleAdd = (redirect = false) => {
        if (count <= stock)
            onAdd(count, redirect);
        setCount(initial);
    };

    return (
        <Container >
            <Box>
                <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count}/>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Button color="secondary" variant="contained" startIcon={<ShoppingCartIcon />} margin="dense" sx={{ pr: 2, width: '-webkit-fill-available' }} onClick={() => { handleAdd(false) }}>Agregar al carrito</Button>
            </Box>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Link to="/cart">
                    <Button color="primary" variant="contained" margin="dense" onClick={() => { handleAdd(true) }} sx={{ pr: 2, width: '-webkit-fill-available', height: '50px' }}>Comprar ahora</Button>
                </Link>
            </Box>
        </Container>

    );

}

export default ItemCount;