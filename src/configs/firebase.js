// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:227327339500:web:2123dce7936e98e7842ec9",
  measurementId: "G-Z7ZY9K9MS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);