// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqRDMrQSfAGu9BvO4iuyo_DigBjbxGyhc",
  authDomain: "fof-website-7018c.firebaseapp.com",
  projectId: "fof-website-7018c",
  storageBucket: "fof-website-7018c.appspot.com",
  messagingSenderId: "102424849317",
  appId: "1:102424849317:web:fdf6f18c167afc8cd1964c",
  measurementId: "G-HYF46EBS70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export { app, analytics, db };