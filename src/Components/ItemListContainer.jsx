import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import BannerSlider from './BannerSlider';
import listaCategorias from '../categorias/categorias'
import Services from '../services/services'

export default function ItemListContainer({ greeting }) {

    const { categoryID, subCategoryID } = useParams();

    const [cardList, setCardList] = useState([]);

    const filters = [];

    if (categoryID) {
        filters.push(categoryID);        
    }

    if (subCategoryID) {
        filters.push(subCategoryID);        
    }

    useEffect(() => {
        Services.getByType(setCardList, filters);
    }, [categoryID, subCategoryID]);

    return (
        <div>
            <BannerSlider/>
            {greeting ? (<Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>) : ("")}
            <ItemList category={categoryID} seccion={listaCategorias[categoryID]} cardList={cardList} />
        </div>
    )
}