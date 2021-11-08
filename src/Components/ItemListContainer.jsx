import React from 'react';
import MediaCard from './MediaCard.jsx'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const styles = {
    greeting: {
        padding: '0.5em',
        fontSize: '20px',        
    }
};

const tarjetas = [
{ descripcion: "Zapatilla Topper hombre Strong Pace Negro/lima Sring", precio: "$6.399", alt: "Zapatillas Topper", imagen: 0, initial: 1, stock: 5 },
{ descripcion: "Descripción 2", precio: "$7.664", alt: "Zapatillas", imagen: 1, initial: 1, stock: 10 },
{ descripcion: "Descripción 3", precio: "$10.999", alt: "Zapatillas", imagen: 2, initial: 1, stock: 7 },
{ descripcion: "Descripción 4", precio: "$4.677", alt: "Zapatillas", imagen: 3, initial: 1, stock: 3 }];


export default function ItemListContainer(props) {

    return (
        <div>
            <Typography style={styles.greeting} color="secondary">Bienvenida {props.greeting}</Typography>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 270,
                            height: 410,
                        },
                    }}>

                    {tarjetas.map((obj) => { return <MediaCard descripcion={obj.descripcion} precio={obj.precio} alt={obj.alt} imagen={obj.imagen} initial={obj.initial} stock={obj.stock} /> })}
                </Box>
            </Container>
        </div>
    )
}