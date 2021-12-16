import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import BannerSlider from './BannerSlider';
import listaCategorias from '../categorias/categorias'
import Services from '../services/services'

export default function ItemListContainer({ greeting }) {

    const { categoryID } = useParams();

    const [cardList, setCardList] = useState([]);

    const filterData = categoryID;

    const filterType = !filterData ? 'subCategory' : 'category';

    useEffect(() => {
        Services.getByType(setCardList, filterType, filterData);
    }, [filterData, filterType]);

    return (
        <div>
            <BannerSlider/>
            {greeting ? (<Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>) : ("")}
            <ItemList seccion={listaCategorias[categoryID]} cardList={cardList} />
        </div>
    )
}