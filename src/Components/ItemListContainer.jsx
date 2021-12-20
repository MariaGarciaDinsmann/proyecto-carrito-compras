import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import BannerSlider from './BannerSlider';
import Services from '../services/services'

export default function ItemListContainer({ greeting }) {

    const { categoryID, subCategoryID } = useParams();

    const [cardList, setCardList] = useState([]);
      
    useEffect(() => {
        let filters = [];
        if (categoryID) filters = [categoryID];
        if (subCategoryID) filters = [categoryID, subCategoryID]
        Services.getByType(setCardList, filters);
    }, [categoryID, subCategoryID]);

    return (
        <div>
            <BannerSlider />
            {greeting ? (<Typography sx={{ padding: '0.5em', fontSize: '20px', marginTop: '20px' }} color="secondary">Bienvenida {greeting}</Typography>) : ("")}
            <ItemList cardList={cardList} />
        </div>
    )
}