import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDU7K0S76yL_xICf3H4oH0lWlrJlnY4mx4",
  authDomain: "messenger-react-228fc.firebaseapp.com",
  projectId: "messenger-react-228fc",
  storageBucket: "messenger-react-228fc.appspot.com",
  messagingSenderId: "231746186431",
  appId: "1:231746186431:web:8ceeeb8a30b0a5947eaa0a",
});

const db = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = firebase.auth.GoogleAuthProvider();

export default db;
