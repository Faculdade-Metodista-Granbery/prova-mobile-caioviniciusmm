import firebase from 'firebase/app'
import 'firebase/firebase-database'
  
const firebaseConfig = {
    apiKey: "AIzaSyDyBNIUCQhAlVPE9bfRECF1QZcfY1ejJYg",
    authDomain: "prova-mobile-8cb99.firebaseapp.com",
    databaseURL: "https://prova-mobile-8cb99-default-rtdb.firebaseio.com",
    projectId: "prova-mobile-8cb99",
    storageBucket: "prova-mobile-8cb99.appspot.com",
    messagingSenderId: "564779464630",
    appId: "1:564779464630:web:9532ac12f29dbba4d47317"
  };


firebase.initializeApp(firebaseConfig);

  const banco= firebase.database().ref();
  const getAll = () => {
  
  return banco

  };

  export default{getAll,}
