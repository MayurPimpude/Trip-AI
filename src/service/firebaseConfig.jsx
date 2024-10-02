// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB",
  authDomain: "tripai-64073.firebaseapp.com",
  projectId: "tripai-64073",
  storageBucket: "tripai-64073.appspot.com",
  messagingSenderId: "162549153133",
  appId: "1:162549153133:web:02a7560fbffff7b6dcee64",
  measurementId: "G-4H5G8JXKF6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const analytics = getAnalytics(app);
