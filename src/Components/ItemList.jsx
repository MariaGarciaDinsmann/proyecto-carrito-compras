import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import Item from './Item';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Fragment } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import iconoHombre from '../imagenes/icono-hombre.png';
import iconoMujer from '../imagenes/icono-mujer.png';

export default function ItemList({ seccion, cardList }) {

    if (cardList.length === 0)
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px', }}>
                <CircularProgress />
            </Box>
        )
    else

        return (
            <Fragment>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: "48%",
                        },
                    }}>
                        <Card sx={{ boxShadow: "none" }}>
                            <Typography variant="h5" gutterBottom component="div" color="primary" mt={3}>
                                {seccion}
                            </Typography>
                        </Card>
                        <Card sx={{ boxShadow: "none", textAlign: "right" }}>
                            <Link to="/categoria/zapatillas-hombre">
                                <img src={iconoHombre} alt="hombres" style={{ marginRight: "10px" }} />
                            </Link>
                            <Link to="/categoria/zapatillas-mujer">
                                <img src={iconoMujer} alt="mujeres" />
                            </Link>
                        </Card>
                    </Box>
                    <Box className="cardListBox"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            backgroundColor: '#e9e5e5',
                            paddingLeft: 0.5,
                            paddingBottom: 0.7,
                            paddingTop: 0.6,
                            '& > :not(style)': {
                                m: 1,
                                width: 270,
                                height: 380,
                                backgroundColor: '#f3f2f2',
                                textDecoration: 'none',
                            },
                        }}>
                        {cardList.map((card) => {

                            return (
                                <Link to={`/productos/${card.id}`} key={card.id}>
                                    <Item {...card} />
                                </Link>

                            )
                        })}
                    </Box>
                </Container>
            </Fragment>
        )
}