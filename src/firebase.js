// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyBDv9gRGfbEgw360DBW8mjnFsyxTKgA5pk",
  authDomain: "fir-dd2ca.firebaseapp.com",
  projectId: "fir-dd2ca",
  storageBucket: "fir-dd2ca.appspot.com",
  messagingSenderId: "464708423149",
  appId: "1:464708423149:web:205ec6a4ff7e7d42b7abe4",
  measurementId: "G-4YJL48JW2L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };