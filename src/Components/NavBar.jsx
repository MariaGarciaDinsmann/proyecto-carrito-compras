import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import LeftMenu from './LeftMenu';
import InputSearch from './InputSearch.jsx';
import logoSportshop from '../Images/logoSportshop.png';

const NavBar2 = () => {

  const [openLeftMenu, changeOpenLeftMenu] = React.useState(false);

  const handleSidebarOpen = () => {
    changeOpenLeftMenu(true);
  };

  const handleSidebarClose = () => {
    changeOpenLeftMenu(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <img src={logoSportshop} />
          <Typography variant="h6" component="div" sx={{ fontFamily: "'Righteous', cursive", fontSize: "1.8rem" }}>
            SportShop
          </Typography>
          <InputSearch/>  
          <Box sx={{ flexGrow: 1 }} />
          <CartWidget />          
        </Toolbar>
      </AppBar>
      <LeftMenu
        open={openLeftMenu}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose}
      />
    </React.Fragment>
  );
}

export default NavBar2;