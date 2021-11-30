import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [productosAgregados , setProductosAgregados] = useState([]);
    
    const addItem = (producto, cantidad) => {
        setProductosAgregados([...productosAgregados, {...producto, cantidad}]);
    } 

    const removeItem = (id) => {
        return productosAgregados.filter(element => element.id !== id);
    }

    const clear = () => {
        setProductosAgregados([]);
    } 

    const isInCart = (id) => {
        return productosAgregados.find(element => element.id === id);
    }

    return <CartContext.Provider value={{ productosAgregados, addItem ,removeItem , clear, isInCart}}> {children} </CartContext.Provider>
};

export default CartProvider;