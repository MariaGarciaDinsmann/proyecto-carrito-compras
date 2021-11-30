import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {

    const { productosAgregados } = useContext(CartContext)    

    console.log(productosAgregados);

    return (
        <>
            <p> Cart </p>
        </>
    )
}
export default Cart;
