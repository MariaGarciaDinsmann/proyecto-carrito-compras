import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore"

export default function ItemDetailContainer() {

    const { productID } = useParams();
    const [cardDetail, setCardDetail] = useState({}); 

    useEffect(() => {
        const db = getFirestore();
        
        const itemRef = doc(db, "items", productID)
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setCardDetail({ ...snapshot.data(), id: snapshot.id });
            }
        });
    }, []);

    return (
        <>
            <ItemDetail key={cardDetail.id} cardDetail={cardDetail} />
        </>
    )
}