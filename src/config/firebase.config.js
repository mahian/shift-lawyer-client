// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEzqtO3JRQGAO51WOTqoRPHVXp6IlcfC8",
  authDomain: "shift-lawyer.firebaseapp.com",
  projectId: "shift-lawyer",
  storageBucket: "shift-lawyer.appspot.com",
  messagingSenderId: "421390463345",
  appId: "1:421390463345:web:5ea838696820b7116146d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;