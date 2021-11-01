import './App.css';
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer.jsx'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#82d219'
    },
    secondary: {
      main: '#ff6600'
    }
  }
})


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ItemListContainer color="primary" greeting={"María Laura"} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
