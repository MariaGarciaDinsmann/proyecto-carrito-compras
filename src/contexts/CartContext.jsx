import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [productosAgregados, setProductosAgregados] = useState([]);

    const addItem = (producto, cantidad) => {
        setProductosAgregados([...productosAgregados, { ...producto, cantidad }]);
    }

    const removeItem = (id) => {
        setProductosAgregados(productosAgregados.filter(element => element.id !== id));
    }

    const clear = () => {
        setProductosAgregados([]);
    }

    const isInCart = (id) => {
        return productosAgregados.find(element => element.id === id);
    }

    const editCountItem = (id, cantidad) => {
        const newlist = productosAgregados.map(element => {
            if (element.id === id)
                element.cantidad = cantidad;
            return element;
        })
        setProductosAgregados(newlist)
    }

    const totalProducts = () => {
        let total = 0;
        productosAgregados.forEach(producto => total += producto.cantidad)
        return total;
    }

    const totalPrice = () => {        
        let total = 0;
        productosAgregados.forEach(producto => total += producto.cantidad * producto.precio)
        return total;
    }  

    return <CartContext.Provider value={{ productosAgregados, addItem, removeItem, clear, isInCart, editCountItem, totalProducts, totalPrice }}> {children} </CartContext.Provider>
};

export default CartProvider;