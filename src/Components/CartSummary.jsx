import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Form from './Form'

export default function CartSummary() {

    const { totalPrice } = useContext(CartContext)

    const subTotalPrice = totalPrice();
    const deliveryPrice = 50;

    return (
        <List>
            <ListItem
                disableGutters
                secondaryAction={`$${subTotalPrice}`}>
                <ListItemText primary="Subtotal" />
            </ListItem>
            <ListItem
                disableGutters
                secondaryAction={`$${deliveryPrice}`}>
                <ListItemText primary="Gastos de envío" />
            </ListItem>
            <Divider sx={{ backgroundColor: "#666", mt: 2, mb: 2 }} />
            <ListItem
                disableGutters
                secondaryAction={`$${subTotalPrice + deliveryPrice}`}
                sx={{ mb: 4 }}>
                <ListItemText primary="Total" />
            </ListItem>
            <Form />
        </List>
    );
}