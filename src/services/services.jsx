import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getFirestore, updateDoc, addDoc } from "firebase/firestore"


export default class Services {

  static get firebaseConfig() {
    return {
      apiKey: "AIzaSyAWFQrfL4eNCiDtq_xJV5ze8gv8cMSha1A",
      authDomain: "sportshop-1f355.firebaseapp.com",
      projectId: "sportshop-1f355",
      storageBucket: "sportshop-1f355.appspot.com",
      messagingSenderId: "454711233370",
      appId: "1:454711233370:web:dfc21292e6987ae47a8163"
    }
  };

  static inicializar = () => {
    initializeApp(Services.firebaseConfig);
  };

  static filterDataByType = (data, filterType, filterData = 'oferta') => {
    return data.filter(element => element[filterType] === filterData);
  }

  static getByType = async (setFunction, filterData, filterType) => {
    setFunction([]);

    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const tempList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFunction(Services.filterDataByType(tempList, filterData, filterType));
    });
  }

  static getById = (id, setFunction) => {
    const db = getFirestore();

    const itemRef = doc(db, "items", id)
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setFunction({ ...snapshot.data(), id: snapshot.id });
      }
    });
  }

  static updateItem = (id, newStock) => {
    const db = getFirestore();
    const orderRef = doc(db, "items", id);
    updateDoc(orderRef, { stock: newStock })
  }

  static addOrder = (order) => {     
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    return addDoc(orderCollection, order)
  }
}