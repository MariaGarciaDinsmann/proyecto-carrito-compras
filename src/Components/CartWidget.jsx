import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom";


export default function CartWidget() {

    const { totalProducts } = useContext(CartContext)

    return (

        <Link to="/cart" >
            <IconButton
                size="large"
                aria-label="Cantidad de productos en el carrito"                
                sx={{color: "#fff"}}
            >
                <Badge badgeContent={totalProducts()} color="secondary">
                    <ShoppingCartIcon style={{ fontSize: 30 }} />
                </Badge>
            </IconButton>
        </Link>

    )
}

