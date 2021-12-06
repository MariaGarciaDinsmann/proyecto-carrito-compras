import * as React from 'react';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Counter from './Counter'
import imagenes from '../images/imagenes'
import { CartContext } from '../contexts/CartContext';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function CartItems({ id, titulo, precio, alt, imagen, aclaracion1, aclaracion2, removeItem, cantidad, stock }) {
    
    const { editCountItem } = useContext(CartContext)
    
    const handleIncrement = () => {
        if (cantidad < stock) {
            editCountItem(id, cantidad + 1);
        }
    };

    const handleDecrement = () => {
        if (cantidad > 1) {
            editCountItem(id, cantidad - 1);
        }
    };
    
    return (
        <>
            <Grid item container sx={{ mb: 3 }}>
                <Grid item xs={2} sx={{ mt: 7 }}>
                    <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={cantidad} />
                </Grid>
                <Grid item xs={10}>
                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt={alt} src={imagenes[imagen]} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="subtitle1" sx={{ lineHeight: 1.4 }}>
                                            {titulo}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom sx={{ background: '#e91e63', color: 'white', display: 'inline-block', pl: 1, pr: 1, mt: 1, mb: 1, borderRadius: 1 }}>
                                            {aclaracion1}
                                        </Typography>
                                        <Typography variant="body2" color="primary">
                                            {aclaracion2}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" startIcon={<DeleteIcon />} sx={{ mr: 1 }}  onClick={()=>{removeItem(id)}}>
                                            Delete
                                        </Button>
                                    </Grid>

                                </Grid>
                                <Grid item>
                                    <Grid item xs>
                                        <Typography variant="subtitle1" color="secondary" sx={{ lineHeight: 1.4, fontSize: "18px", pl: 4 }}>
                                        {`$${precio}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>

    );
}