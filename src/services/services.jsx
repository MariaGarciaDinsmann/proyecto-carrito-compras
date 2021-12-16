import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getFirestore, updateDoc, addDoc, query, where } from "firebase/firestore"


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

  //filters.length == 0 : oferta || filters.length == 1 : category and  oferta || filters.length == 2 : category and subCategory
  static getByType = async (setFunction, filters = []) => {
    setFunction([]);

    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    let filterWhere;

    switch (filters.length) {
      case 0: filterWhere = (where("oferta", "==", true));
        break;
      case 1: filterWhere = (where("oferta", "==", true), where("category", "==", filters[0]));
        break;
      case 2: filterWhere = (where("category", "==", filters[0]), where("subCategory", "==", filters[1]));
        break;
    }

    const filterQuerys = query(itemsCollection, filterWhere);

    getDocs(filterQuerys).then((snapshot) => {
      const tempList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFunction(tempList);
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
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    var date = new Date(timestamp);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const data = { ...order, date: date }
    return addDoc(orderCollection, data)
  }
}