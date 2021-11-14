import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Item from './Item.jsx'
import getData from '../mocks/cards.jsx'

export default function ItemList() {

    const [cardList, setCardList] = useState([]);
    
    
    async function fetchingData() {
        try {
            const data = await getData(); //no sigue la ejecucion del bloque del try hasta que no se complete el resolve de la promise
            console.log(data);
            setCardList(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {        
        fetchingData();
    }, [])

    return (
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
                {cardList.map((card) => { return <Item key={card.id} descripcion={card.descripcion} precio={card.precio} alt={card.alt} imagen={card.imagen} initial={1} stock={card.stock}/> })}
            </Box>
        </Container >
    )
}