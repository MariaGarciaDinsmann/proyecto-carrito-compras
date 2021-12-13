import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom";
import congrats from '../imagenes/congrats.jpg';

export default function Congrats() {

    const { orderID } = useContext(CartContext)
    if (!orderID)
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px', }}>
                <CircularProgress />
            </Box>
        )
    else
        return (
            <>
                <Container>
                    <Box sx={{ width: 300, marginTop: 6, padding: 4, margin: "auto" }}>
                        <Paper sx={{ width: 300, padding: 4, textAlign: "center" }}>
                            <img src={congrats} alt="congrats" />
                            <Typography variant="h4" color="secondary">¡Felicitaciones!</Typography>
                            <Typography variant="subtitle1">Acabas de finalizar tu compra.</Typography>
                            <Typography variant="subtitle1" sx={{ mt: 5 }}>Este es tu número de orden:</Typography>
                            <Typography variant="subtitle1" color="primary">{orderID}</Typography>
                            <Link to={`/`}>
                                <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                                    Volver al inicio
                                </Button>
                            </Link>
                        </Paper>
                    </Box>
                </Container>
            </>
        )
}