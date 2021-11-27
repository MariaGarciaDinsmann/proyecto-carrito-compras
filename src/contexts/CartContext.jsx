import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {

const [isDarkMode, setIsDarkMode] = useState(false);

const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return <CartContext.Provider value={{ isDarkMode, setIsDarkMode, toggleTheme }}> {children} </CartContext.Provider>
};

export default CartProvider;