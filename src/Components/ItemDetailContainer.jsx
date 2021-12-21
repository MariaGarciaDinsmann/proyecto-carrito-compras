import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import Services from '../services/services'
import { Typography } from '@mui/material';

export default function ItemDetailContainer() {

    const { productID } = useParams();
    const [cardDetail, setCardDetail] = useState({});

    useEffect(() => {
        Services.getById(productID, setCardDetail);
    }, [productID]);

    return (
        <>
            {
                !cardDetail.error ?
                    <ItemDetail key={cardDetail.id} cardDetail={cardDetail} />
                    :
                    <Typography sx={{ mt:5, pl: 5 }}>Producto no encontrado</Typography>
            }
        </>
    )
}