// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyDRIMgOJKIUdczPuo77Av2R110aIJd7okA",
  authDomain: "upmind-c378a.firebaseapp.com",
  projectId: "upmind-c378a",
  storageBucket: "upmind-c378a.firebasestorage.app",
  messagingSenderId: "569099266004",
  appId: "1:569099266004:web:d1addd724b6dc185b75841",
  measurementId: "G-Q3LG4080NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database instance
export const analytics = getAnalytics(app);
