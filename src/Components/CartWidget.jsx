import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function CartWidget() {

    return (

        <IconButton
            size="large"
            aria-label="Tenés 4 productos en el carrito"
            color="inherit"
        >
            <Badge badgeContent={4} color="info">
                <ShoppingCartIcon style={{ fontSize: 30 }} />
            </Badge>
        </IconButton>

    )
}

