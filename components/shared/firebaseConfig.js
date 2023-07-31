// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjP0nc3CjnQTfI1C1XyJl6kma76Xt5w8E",
  authDomain: "client-table-cd7d8.firebaseapp.com",
  projectId: "client-table-cd7d8",
  storageBucket: "client-table-cd7d8.appspot.com",
  messagingSenderId: "99768294549",
  appId: "1:99768294549:web:de40765a0d29cf45bb4f9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
