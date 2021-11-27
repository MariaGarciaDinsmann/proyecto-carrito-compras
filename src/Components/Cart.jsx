import { Container } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = ({ title, children }) => {

    const { isDarkMode, setIsDarkMode } = useContext(CartContext)

    console.log(isDarkMode);

    return (
        <>
            <Container isDarkMode={isDarkMode}>
                <p>Darkmode: {isDarkMode}</p>
                <h1> {title} </h1>
                <p> {children} </p>
                <button onClick={() => { setIsDarkMode(!isDarkMode) }}>botón</button>
            </Container>
        </>
    )
}

export default Cart;
