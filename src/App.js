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
import Congrats from './Components/Congrats';

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

export default function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"María Laura"} />} />
            <Route path="/categoria/:categoryID" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryID/:subCategoryID" element={<ItemListContainer />} />
            <Route path="/productos/:productID" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/congrats" element={<Congrats />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}


