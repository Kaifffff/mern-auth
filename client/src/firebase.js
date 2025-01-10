// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4e67a.firebaseapp.com",
  projectId: "mern-auth-4e67a",
  storageBucket: "mern-auth-4e67a.firebasestorage.app",
  messagingSenderId: "882224127771",
  appId: "1:882224127771:web:f63b4020c479a1b1167dbe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);