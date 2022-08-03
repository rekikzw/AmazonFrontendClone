// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKQR0a8qKRmbQBhfHcvj3AoPO7tTPsZhI",
  authDomain: "rekik-d2efd.firebaseapp.com",
  projectId: "rekik-d2efd",
  storageBucket: "rekik-d2efd.appspot.com",
  messagingSenderId: "600139631976",
  appId: "1:600139631976:web:f80121fb710333dfb79add",
  measurementId: "G-LW64T5PGQT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
