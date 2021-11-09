import MediaCard from './MediaCard.jsx'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const styles = {
    greeting: {
        padding: '0.5em',
        fontSize: '20px',
        marginTop: '20px',        
    }
};

const tarjetas = require('../catalogo/catalogo.json');

export default function ItemListContainer( {greeting} ) {

    return (
        <div>
            <Typography style={styles.greeting} color="secondary">Bienvenida {greeting}</Typography>
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

                    {tarjetas.map((obj) => { return <MediaCard descripcion={obj.descripcion} precio={obj.precio} alt={obj.alt} imagen={obj.imagen} initial={1} stock={obj.stock} /> })}
                </Box>
            </Container>
        </div>
    )
}