import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagenes from '../images/imagenes.js'
import ItemCount from './ItemCount.jsx';


export default function Item({id, descripcion, precio, alt, imagen, initial, stock }) {

  const [currentStock, setStock] = useState(stock);

  const callback = (count) => {
    setStock(currentStock - count);
    alert(`Agregaste ${count} ${count === 1 ? 'producto' : 'productos' } al carrito`);       
  }

  return (

    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={imagenes[imagen]}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {precio}
        </Typography>
        <Typography variant="body2" sx={{
          minHeight: '40px',
          color: '#999',
        }}>
          {descripcion}
        </Typography>
      </CardContent>

      <CardActions>
        <ItemCount stock={currentStock} initial={initial} onAdd={callback} />
      </CardActions>

    </Card>

  );
}