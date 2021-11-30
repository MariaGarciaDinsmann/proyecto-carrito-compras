import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import getData from '../mocks/cards'

export default function ItemDetailContainer() {

    const {productID} = useParams();
    const [cardDetail, setCardDetail] = useState({});

    async function fetchingDetailData() {
        try {
            const oneCardData = await getData({id: productID});
            setCardDetail(oneCardData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchingDetailData();
    },)


    return (    

        <ItemDetail key={cardDetail.id} cardDetail={cardDetail} />
    )
}