import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createMuiTheme } from '@mui/material';
import { teal, pink } from '@mui/material/colors';
import './styles.css'
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
import Cart from './Components/Cart.jsx';

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

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [currentProduct, setCurrentProduct] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  console.log(currentUser)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />       
        <Routes>
          <Route path="/" element={<ItemListContainer setCurrentProduct={setCurrentProduct} greeting={"María Laura"}  filterType= {"subCategory"} filterData= {"oferta"}/>} />
          <Route path="/productos/zapatillas-hombre" element={<ItemListContainer setCurrentProduct={setCurrentProduct} filterType= {"category"} filterData= {"zapatillas-hombre"}/>} />
          <Route path="/productos/zapatillas-mujer" element={<ItemListContainer setCurrentProduct={setCurrentProduct} filterType= {"category"} filterData= {"zapatillas-mujer"}/>} />
          <Route path="/productos/:productID" element={<ItemDetailContainer {...currentProduct} />} />
          <Route path="/cart" element={<Cart/>} />          
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
