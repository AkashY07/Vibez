import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmKU1zyJR7SqG0z2iFGZ-1MIirLKGbBCc",
    authDomain: "vibez-e0192.firebaseapp.com",
    projectId: "vibez-e0192",
    storageBucket: "vibez-e0192.appspot.com",
    messagingSenderId: "953814575904",
    appId: "1:953814575904:web:d1f92c0156b3f61b8d8545",
    measurementId: "G-18FMTM3PWP"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}