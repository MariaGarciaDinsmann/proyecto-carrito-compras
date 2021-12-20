import { Divider, IconButton, List, ListItemText, SwipeableDrawer } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import { Link } from "react-router-dom";

const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const drawerWidth = 260;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    backgroundColor: '#d0d0d0'
}));

function LeftMenu({ open, onOpen, onClose }) {

    const theme = useTheme();

    const categoriesObj = [
        {
            id: 1,
            name: 'Home',
            url: '/',
        },       
        {
            id: 2,
            name: 'Zapatillas',
            url: '/categoria/zapatillas',
        },       
        {
            id: 3,
            name: 'Indumentaria',
            url: '/categoria/indumentaria',
        },
        {
            id: 4,
            name: 'Accesorios',
            url: '/categoria/accesorios',
        },
       
    ]
    const [categories] = useState(categoriesObj);

    return (
        <SwipeableDrawer
            color='primary'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',                    
                },
            }}
            anchor="left"
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
        >
            <DrawerHeader>
                <IconButton onClick={onClose} sx={{ color: '#666' }}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider sx={{ borderColor: '#ccc' }} />
            <List>
                <ListItemText onClick={onClose} sx={{ padding: '20px', whiteSpace: 'pre-line' }}>
                    {categories.map(({ id, name, url }) => (
                        <Link to={url} key={id}> {name} {"\n"}{"\n"}</Link>
                    ))}
                </ListItemText>
            </List>


        </SwipeableDrawer>
    );
}

export default LeftMenu;