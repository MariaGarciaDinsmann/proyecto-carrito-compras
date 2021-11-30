import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList'
import getData from '../mocks/cards'


export default function ItemListContainer({ greeting }) {

    function renameSeccion() {
        seccion = seccion.replace('-', ' ');
        seccion = seccion[0].toUpperCase() + seccion.substring(1);
    }

    const { categoryID } = useParams();

    let seccion = categoryID;

    if(seccion)
        renameSeccion() 
    else
        seccion = 'Nuestras ofertas'

    const filterData = categoryID;

    const filterType = !filterData ? 'subCategory' : 'category';

    const [cardList, setCardList] = useState([]);

    async function fetchingData() {
        try {
            setCardList([]);
            const data = await getData({ filterType, filterData }); //no sigue la ejecucion del bloque del try hasta que no se complete el resolve de la promise
            setCardList(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchingData();
    }, [filterData])

    return (
        <div>
            {greeting ? (<Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>) : ("")}
            <ItemList seccion={seccion} cardList={cardList} />
        </div>
    )
}