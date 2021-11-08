import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";

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
            name: 'Categorías'
        },
        {
            id: 2,
            name: 'Ofertas'
        },
        {
            id: 3,
            name: 'Historial'
        },
        {
            id: 3,
            name: 'Cerrar sesión'
        },
    ]
    const [categories, changeCategories] = useState(categoriesObj);

    return (
        <SwipeableDrawer
            color='primary'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',                    
                    color: 'primary',                    
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
                {categories.map(({ id, name }) => (
                    <ListItem button key={id}>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    );
}

export default LeftMenu;