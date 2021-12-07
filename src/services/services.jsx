import { initializeApp } from "firebase/app";

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

}
