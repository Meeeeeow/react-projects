import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCmTt79hvFhjSEqKaHCBKKOEORmL4I7-ZQ",
    authDomain: "clothing-app-db-b4b1a.firebaseapp.com",
    projectId: "clothing-app-db-b4b1a",
    storageBucket: "clothing-app-db-b4b1a.appspot.com",
    messagingSenderId: "472888065997",
    appId: "1:472888065997:web:64c1bd142bcfb5dfb5ce84",
    measurementId: "G-S1H8J921BR"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

