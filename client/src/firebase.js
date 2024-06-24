// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-a8e9c.firebaseapp.com",
  projectId: "mern-blog-a8e9c",
  storageBucket: "mern-blog-a8e9c.appspot.com",
  messagingSenderId: "1012002063629",
  appId: "1:1012002063629:web:432ffd818a82532e3d5c44",
  measurementId: "G-SHYFHR5147"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
