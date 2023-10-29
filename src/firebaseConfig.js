// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgfAvc2nYg2O237VRv6VUquqb4Ogqdj84",
  authDomain: "e-commerce-8a40f.firebaseapp.com",
  projectId: "e-commerce-8a40f",
  storageBucket: "e-commerce-8a40f.appspot.com",
  messagingSenderId: "861991764352",
  appId: "1:861991764352:web:95853f44558b269add8165",
  measurementId: "G-D3444FTCSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// firestore initialization
export const db = getFirestore(app);


//storage initialization
export const storage = getStorage(app);
//authentication
export const auth = getAuth(app);