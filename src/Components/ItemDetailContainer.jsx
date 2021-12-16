import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import Services from '../services/services'

export default function ItemDetailContainer() {

    const { productID } = useParams();
    const [cardDetail, setCardDetail] = useState({}); 

    useEffect(() => {
        Services.getById(productID, setCardDetail);
    }, [productID]);

    return (
        <>
            <ItemDetail key={cardDetail.id} cardDetail={cardDetail} />
        </>
    )
}