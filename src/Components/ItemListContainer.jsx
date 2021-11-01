import React from 'react';
import MediaCard from './MediaCard.jsx'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const styles = {
    greeting: {
        padding: '0.5em',
        fontSize: '20px',
        color: '#234578'
    }
};

const tarjetas = [{ descripcion: "Zapatilla Topper hombre Strong Pace Negro/lima Sring", precio: "$6.399", alt: "Zapatillas Topper", imagen: 0 },
{ descripcion: "Descripción 2", precio: "$7.664", alt: "Zapatillas", imagen: 1 },
{ descripcion: "Descripción 3", precio: "$10.999", alt: "Zapatillas", imagen: 2 },
{ descripcion: "Descripción 4", precio: "$4.677", alt: "Zapatillas", imagen: 3 }];


export default function ItemListContainer(props) {

    return (
        <div>
            <p style={styles.greeting}>Bienvenida {props.greeting}</p>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 270,
                            height: 380,
                        },
                    }}>

                    {tarjetas.map((obj) => { return <MediaCard descripcion={obj.descripcion} precio={obj.precio} alt={obj.alt} imagen={obj.imagen} /> })}
                </Box>
            </Container>
        </div>
    )
}