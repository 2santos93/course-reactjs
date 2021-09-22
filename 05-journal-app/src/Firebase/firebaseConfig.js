import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9dyiVoX7gUsly4Zk6ERXEAomNXW8R0SY",
  authDomain: "journal-app-16cea.firebaseapp.com",
  projectId: "journal-app-16cea",
  storageBucket: "journal-app-16cea.appspot.com",
  messagingSenderId: "414914454281",
  appId: "1:414914454281:web:5e180f1fad5686a499e9d8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { 
  db, 
  googleAuthProvider 
};
