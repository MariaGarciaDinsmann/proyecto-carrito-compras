import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            console.log("error")
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        } else {
            console.log("error")
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
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button onClick={handleDecrement}>-</Button>
                    <Button disabled sx={{ width: '118px' }}>{count}</Button>
                    <Button onClick={handleIncrement}>+</Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Button color="secondary" variant="contained" margin="dense" sx={{ pr: 2 }} onClick={handleAdd}>Agregar al carrito</Button>
            </Box>
        </Container>

    );

}


export default ItemCount;