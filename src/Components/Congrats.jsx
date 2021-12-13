import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom";

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
                    <Box sx={{ width: 500, marginTop: 6, padding: 4, margin: "auto" }}>
                        <Paper sx={{ width: 500, padding: 4, textAlign: "center" }}>
                            <h2>Felicitaciones</h2>
                            <p>Acabas de finalizar tu compra</p>
                            <p>Este es tu número de orden:</p>
                            <p>{orderID}</p>
                            <Link to={`/`}>
                                <Button variant="contained" color="secondary" sx={{ width: '-webkit-fill-available', mt: 4 }}>
                                    Volver al inicio
                                </Button>
                            </Link>
                        </Paper>
                    </Box>
                </Container>
            </>
        )
}