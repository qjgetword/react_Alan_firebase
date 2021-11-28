// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM3XUXxwv0PwwveNLwHzcUm3KCck7aWWM",
  authDomain: "reactdemo-e4b5e.firebaseapp.com",
  projectId: "reactdemo-e4b5e",
  storageBucket: "reactdemo-e4b5e.appspot.com",
  messagingSenderId: "639950349119",
  appId: "1:639950349119:web:11ab6aaec79797ab60e98a",
  measurementId: "G-Q5KQHKN9HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
