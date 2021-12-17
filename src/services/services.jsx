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

  static get itemsCollection() {
    return collection(Services.db, "items");
  }

  static get db() {
    return getFirestore();
  }

  static get basicQuery() {
    return query(Services.itemsCollection, where("oferta", "==", true));
  }

  static categoryQuery = (category = "") => {
    return query(Services.itemsCollection, where("oferta", "==", true), where("category", "==", category));
  }

  static subCategoryQuery = (category = "", subCategory = "") => {
    return query(Services.itemsCollection, where("category", "==", category), where("subCategory", "==", subCategory))
  }

  static inicializar = () => {
    initializeApp(Services.firebaseConfig);
  };

  //filters.length == 0 : oferta || filters.length == 1 : category and  oferta || filters.length == 2 : category and subCategory
  static getByType = async (setFunction, filters = []) => {
    setFunction([]);


    let filterQuery = {
      0: Services.basicQuery,
      1: Services.categoryQuery(filters[0]),
      2: Services.subCategoryQuery(filters[0], filters[1])
    };

    getDocs(filterQuery[filters.length]).then((snapshot) => {
      const tempList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFunction(tempList);
    });
  }

  static getById = (id, setFunction) => {
    
    const itemRef = doc(Services.db, "items", id)
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setFunction({ ...snapshot.data(), id: snapshot.id });
      }
    });
  }

  static updateItem = (id, newStock) => {
    const orderRef = doc(Services.db, "items", id);
    updateDoc(orderRef, { stock: newStock })
  }

  static addOrder = (order) => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    var date = new Date(timestamp);
    const orderCollection = collection(Services.db, "orders");
    const data = { ...order, date: date }
    return addDoc(orderCollection, data)
  }
}