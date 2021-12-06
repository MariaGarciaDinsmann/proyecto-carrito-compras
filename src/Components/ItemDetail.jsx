import * as React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import imagenes from '../images/imagenes'
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import ItemCount from './ItemCount';
import { CartContext } from '../contexts/CartContext';


export default function ItemDetail({ cardDetail }) {

    const { addItem, isInCart } = useContext(CartContext)

    const { titulo, descripcion, precio, alt, imagen, link, stock, aclaracion2 } = cardDetail;

    const [currentStock, setCurrentStock] = useState(stock);

    const onAdd = (count, redirect) => {
        let mensajeAlert = "Este producto ya fue agregado";

        if (!isInCart(cardDetail.id)) { //si el id no esta en la lista de productos agregados
            setCurrentStock(currentStock - count);
            addItem(cardDetail, count);// agrega producto y cantidad a la lista de productos agregados
            mensajeAlert = `Agregaste ${count} ${count === 1 ? 'producto' : 'productos'} al carrito`;
        }

        if (!redirect)//se muestra el alert si redirect es false -> es del carrito
            alert(mensajeAlert);

    }

    if (!titulo)
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px', }}>
                <CircularProgress />
            </Box>
        )
    else
        return (
            <Container>                
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 475,
                            minWidth: 255,
                        },
                    }}>
                    <Card sx={{ minWidth: 400, minHeight: 480, boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={imagenes[imagen]}
                            alt={alt}
                            sx={{ mt: "25%" }}
                        />
                    </Card>
                    <Card variant="outlined" sx={{ minWidth: 700, minHeight: 480 }}>
                        <CardContent>
                            <Typography sx={{ mt: 3 }} variant="h4" color="secondary" gutterBottom>
                                {`$${precio}`}
                            </Typography>
                            <Typography variant="h5">
                                {titulo}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom color="secondary" sx={{ background: '#e91e63', color: 'white', display: 'inline-block', pl: 1, pr: 1, mt: 2, borderRadius: 1 }}>
                                {aclaracion2}
                            </Typography>
                            <Typography sx={{ mb: 3, mt: 3 }} color="text.secondary">
                                {descripcion}
                            </Typography>
                            <Typography variant="body1">
                                <Link href="#" underline="none" color="secondary">{link}</Link>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ItemCount stock={currentStock} initial={1} onAdd={onAdd} />
                        </CardActions>
                    </Card>
                </Box>
            </Container >
        );
}




