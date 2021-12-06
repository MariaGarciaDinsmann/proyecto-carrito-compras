import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from "firebase/firestore"

export default function ItemListContainer({ greeting }) {

    const { categoryID } = useParams();

    const [cardList, setCardList] = useState([]);

    const filterData = categoryID;

    const filterType = !filterData ? 'subCategory' : 'category';

    const filterDataByType = (data, filterType, filterData = 'oferta') => {
        return data.filter(element => element[filterType] === filterData);
    }

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            const tempList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setCardList(filterDataByType(tempList, filterType, filterData));
        });
    }, [filterData]);

    function renameSeccion() {
        seccion = seccion.replace('-', ' ');
        seccion = seccion[0].toUpperCase() + seccion.substring(1);
    }

    let seccion = categoryID;

    if (seccion)
        renameSeccion()
    else
        seccion = 'Nuestras ofertas'

    return (
        <div>
            {greeting ? (<Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>) : ("")}
            <ItemList seccion={seccion} cardList={cardList} />
        </div>
    )
}