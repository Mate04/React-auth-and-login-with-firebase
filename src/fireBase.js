// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzhICpEEdZjXV8b19FEkCECuTcdWr30p0",
  authDomain: "auth-react-a7566.firebaseapp.com",
  projectId: "auth-react-a7566",
  storageBucket: "auth-react-a7566.appspot.com",
  messagingSenderId: "1086775635264",
  appId: "1:1086775635264:web:78b0b9a66ffda7ce4cdea5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);