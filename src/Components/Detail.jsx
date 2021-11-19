
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagenes from '../images/imagenes'
import Link from '@mui/material/Link';


export default function Detail({ titulo, descripcion, precio, alt, imagen, link }) {
    return (
        <>
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
                        {precio}
                    </Typography>
                    <Typography variant="h5">
                        {titulo}
                    </Typography>
                    <Typography sx={{ mb: 3, mt: 3 }} color="text.secondary">
                        {descripcion}
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" underline="none" color="secondary">{link}</Link>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained">Comprar</Button>
                </CardActions>
            </Card>
        </>
    )
}