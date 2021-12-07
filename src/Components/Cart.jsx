import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import publicidad01 from '../imagenes/publicidad-01.jpg';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: 4,
}));


const Cart = () => {

    const { productosAgregados, removeItem, clear, totalProducts } = useContext(CartContext)

    return (
        <Container>
            <Box sx={{ flexGrow: 1, mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item><Typography color="primary" variant="subtitle1" sx={{ mb: 3.5, fontWeight: "bold" }}>TU CARRITO ({totalProducts()})</Typography>

                            {
                                productosAgregados.length ?
                                    productosAgregados.map((producto) => {
                                        return (
                                            <CartItems {...producto} removeItem={removeItem} />)
                                    })
                                    :
                                    <>
                                        <div> No tenés productos cargados. </div>
                                        <Link to="/">
                                            <Button variant="contained" color="secondary" sx={{ margin: "auto", mt: 3, display: "block", mb: 3 }}> Ver productos</Button>
                                        </Link>
                                    </>
                            }
                            {
                                productosAgregados.length !== 0 ?
                                    <Button variant="contained" color="primary" sx={{ float: "right" }} onClick={() => { clear() }}> Vaciar el carrito</Button> : ""
                            }
                            <div style={{ clear: "both" }}></div>
                        </Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ backgroundColor: '#333', color: '#fff' }}>
                            {
                                productosAgregados.length ?
                                    <>
                                        <Typography variant="subtitle1" sx={{ mb: 3 }}>RESUMEN DE COMPRA</Typography>
                                        <CartSummary />
                                    </> :
                                    <>
                                        <Typography variant="h5" sx={{ mb: 3 }}>¡No te pierdas nuestras ofertas!</Typography>
                                        <Link to="/">
                                            <img src={publicidad01} alt="publicidad" style={{ margin: "auto", display: "block", marginBottom: 8 }} />
                                        </Link>
                                    </>
                            }
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Cart;
