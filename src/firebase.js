// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDWl1-XvoCpA1EtrVM8i_hxBkZ_liLe94",
  authDomain: "react-auth-feac7.firebaseapp.com",
  projectId: "react-auth-feac7",
  storageBucket: "react-auth-feac7.appspot.com",
  messagingSenderId: "551343679874",
  appId: "1:551343679874:web:b2734ef62d3a350093c79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);