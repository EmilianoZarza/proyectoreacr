// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Uv1eD3M5Klof6siuSleRpzDLiEAshmc",
  authDomain: "reactproyectoemi.firebaseapp.com",
  projectId: "reactproyectoemi",
  storageBucket: "reactproyectoemi.appspot.com",
  messagingSenderId: "64664999344",
  appId: "1:64664999344:web:050a301bf7bf21fb8ff275"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);