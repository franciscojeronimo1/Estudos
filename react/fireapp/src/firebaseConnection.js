import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDTOfq2J7i4cl9wLIYUrpsYunNQCeAX3vw",
  authDomain: "curso-7e5da.firebaseapp.com",
  projectId: "curso-7e5da",
  storageBucket: "curso-7e5da.firebasestorage.app",
  messagingSenderId: "871389459177",
  appId: "1:871389459177:web:60ae884b0ede026887f678",
  measurementId: "G-RPYX1NCJCL"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }