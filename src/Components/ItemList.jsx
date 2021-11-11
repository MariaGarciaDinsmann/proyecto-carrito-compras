import { useState } from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Item from './Item.jsx'
import Cards from '../mocks/cards.jsx'

export default function ItemList() {

    const [cardList, setCardList] = useState([]);
    
    
    const getData = () => {
        return new Promise((resolve, reject) => {
            if (!Cards.length) {
                reject(new Error('No existen items'));
            }
            setTimeout(() => {
                resolve(Cards);
            }, 2000);
        });
    }

    async function fetchingData() {
        try {
            const data = await getData(); //no sigue la ejecucion del bloque del try hasta que no se complete el resolve de la promise
            console.log(data);
            setCardList(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    fetchingData();

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
                {cardList.map((card) => { return <Item id={card.id} descripcion={card.descripcion} precio={card.precio} alt={card.alt} imagen={card.imagen} initial={1} stock={card.stock}/> })}
            </Box>
        </Container >
    )
}