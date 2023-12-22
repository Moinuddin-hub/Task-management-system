// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJjmg0IPKqtFYtiiAT3aFUMgW01B5exJg",
  authDomain: "assignment-9-cb649.firebaseapp.com",
  projectId: "assignment-9-cb649",
  storageBucket: "assignment-9-cb649.appspot.com",
  messagingSenderId: "1081788795480",
  appId: "1:1081788795480:web:c6294341ec7a3b1ab4d82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);