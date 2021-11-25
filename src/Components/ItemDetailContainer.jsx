import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import getData from '../mocks/cards'

export default function ItemDetailContainer({id}) {

    const [cardDetail, setCardDetail] = useState({});

    async function fetchingDetailData() {
        try {
            const oneCardData = await getData({id});
            setCardDetail(oneCardData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchingDetailData();
    },)


    return (    

        <ItemDetail key={cardDetail.id} {...cardDetail} />
    )
}