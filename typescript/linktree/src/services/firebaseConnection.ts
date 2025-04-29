
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-Yr8svExii5tBiGBEmH0bqKbL4EXw1MQ",
  authDomain: "react-links-4dc77.firebaseapp.com",
  projectId: "react-links-4dc77",
  storageBucket: "react-links-4dc77.firebasestorage.app",
  messagingSenderId: "649460254231",
  appId: "1:649460254231:web:e4cf39c1606f31e243fe52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {db, auth}