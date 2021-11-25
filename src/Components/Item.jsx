import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagenes from '../images/imagenes'

export default function Item({ titulo, precio, alt, imagen, aclaracion1, aclaracion2 }) {

  return (
    <Card sx={{ maxWidth: 300, height: 380 }}>
      <CardMedia
        component="img"
        height="200"
        image={imagenes[imagen]}
        alt={alt}
      />
      <CardContent>
        <Typography variant="button" display="block" gutterBottom color="secondary" sx={{ background: '#e91e63', color: 'white', display:'inline-block', pl: 1, pr: 1, borderRadius: 1 }}>
          {aclaracion2}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {precio}
        </Typography>
        <Typography variant="body2" sx={{
          minHeight: '40px',
          color: '#999',
        }}>
          {titulo}
        </Typography>
        <Typography variant="overline" display="block" gutterBottom mt={2} color="primary" sx={{ fontWeight: 'bold' }}>
          {aclaracion1}
        </Typography>
      </CardContent>
    </Card>

  );
}