// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqO8EK2nggnVKzzFK9pKqUpHoAji1cUOc",
  authDomain: "learnvocab-55562.firebaseapp.com",
  projectId: "learnvocab-55562",
  storageBucket: "learnvocab-55562.appspot.com",
  messagingSenderId: "549835979789",
  appId: "1:549835979789:web:e0d1acc3c0dd32a2ff2944",
  measurementId: "G-N01YMDT72N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
