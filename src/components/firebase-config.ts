// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1XaCu-drRb0qy2_7Ynqu5hiFNjljZfVI",
  authDomain: "recipe-1c83e.firebaseapp.com",
  projectId: "recipe-1c83e",
  storageBucket: "recipe-1c83e.firebasestorage.app",
  messagingSenderId: "82477443369",
  appId: "1:82477443369:web:7f6cd4920d11029984af38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
