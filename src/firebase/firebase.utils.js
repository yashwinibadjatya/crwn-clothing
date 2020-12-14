import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBc9MVjFPZHR9piVYw40dn9DZMmdF3uqx8",
  authDomain: "crwn-db-22f5c.firebaseapp.com",
  projectId: "crwn-db-22f5c",
  storageBucket: "crwn-db-22f5c.appspot.com",
  messagingSenderId: "768463056117",
  appId: "1:768463056117:web:92a52491b5f1eec72269bc",
  measurementId: "G-KSN0VDKQKF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
