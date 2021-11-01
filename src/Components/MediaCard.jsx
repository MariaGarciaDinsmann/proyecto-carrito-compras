import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagenes from '../Images/Imagenes.js'


export default function MediaCard(props) {

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={imagenes[props.imagen]}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          minHeight: '40px',
          color: '#999',
        }}>
          {props.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Agregar al carrito</Button>        
      </CardActions>
    </Card>
  );
}