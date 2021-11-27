import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createMuiTheme } from '@mui/material';
import { teal, pink } from '@mui/material/colors';
import './styles.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import CartProvider from './contexts/CartContext';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: pink[500]
    },
  }
})

function App() {

  const [currentProduct, setCurrentProduct] = useState({}) 

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>          
          <NavBar />          
          <Routes>
            <Route path="/" element={<ItemListContainer setCurrentProduct={setCurrentProduct} seccion={"Nuestras ofertas"} greeting={"María Laura"} filterType={"subCategory"} filterData={"oferta"} />} />
            <Route path="/productos/zapatillas-hombre" element={<ItemListContainer seccion={"Zapatillas hombre"} setCurrentProduct={setCurrentProduct} filterType={"category"} filterData={"zapatillas-hombre"} />} />
            <Route path="/productos/zapatillas-mujer" element={<ItemListContainer seccion={"Zapatillas mujer"} setCurrentProduct={setCurrentProduct} filterType={"category"} filterData={"zapatillas-mujer"} />} />
            <Route path="/productos/:productID" element={<ItemDetailContainer {...currentProduct} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
