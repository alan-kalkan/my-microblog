// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtjhlJqL0v0XGGYIzSQmOLYScBtcHG8po",
  authDomain: "skyblog-5de8c.firebaseapp.com",
  projectId: "skyblog-5de8c",
  storageBucket: "skyblog-5de8c.appspot.com",
  messagingSenderId: "1091065312092",
  appId: "1:1091065312092:web:95ded99e38719470958799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();