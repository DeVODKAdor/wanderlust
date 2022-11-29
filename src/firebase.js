import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBw1LfGp7e6aauM6CMzXIX-Te-TTbSBtNs",
    authDomain: "wanderlustvr-45815.firebaseapp.com",
    projectId: "wanderlustvr-45815",
    storageBucket: "wanderlustvr-45815.appspot.com",
    messagingSenderId: "293491598327",
    appId: "1:293491598327:web:263083238ae80c5d1a04f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)