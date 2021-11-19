import NavBar from './Components/NavBar.jsx';
// import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
import { createMuiTheme}  from '@mui/material';
import { teal, pink } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import './styles.css'


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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        {/* <ItemListContainer greeting={"María Laura"} /> */}
        <ItemDetailContainer id={'1'}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
