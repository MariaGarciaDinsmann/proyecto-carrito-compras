import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList'
import getData from '../mocks/cards'


export default function ItemListContainer( {greeting} ) {

    const [cardList, setCardList] = useState([]);


    async function fetchingData() {
        try {
            const data = await getData(); //no sigue la ejecucion del bloque del try hasta que no se complete el resolve de la promise
            setCardList(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchingData();
    }, [])

    return (
        <div>
            <Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>
            <ItemList cardList={cardList}/>            
        </div>
    )
}