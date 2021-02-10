import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebaseconfig here




// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuthentication, firebaseFireStore, timestamp };

