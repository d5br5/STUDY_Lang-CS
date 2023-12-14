// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ7vsbYXAswN2xBUPdkQe5jXW1RjbjfLw",
  authDomain: "react-next-shop-app-f1c7b.firebaseapp.com",
  projectId: "react-next-shop-app-f1c7b",
  storageBucket: "react-next-shop-app-f1c7b.appspot.com",
  messagingSenderId: "927904247187",
  appId: "1:927904247187:web:d78cb43307c8f811140c66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
