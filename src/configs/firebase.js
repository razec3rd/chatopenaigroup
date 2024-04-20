// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq9o71aqmrsBSOq4bYqWzat9EiwZhFQf0",
  authDomain: "chatopenaigroup.firebaseapp.com",
  projectId: "chatopenaigroup",
  storageBucket: "chatopenaigroup.appspot.com",
  messagingSenderId: "227327339500",
  appId: "1:227327339500:web:89faae3fba4282d2842ec9",
  measurementId: "G-FECKZ36527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const storage = getStorage(app);