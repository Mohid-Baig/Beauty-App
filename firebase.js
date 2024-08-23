// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfkwnQWwpQFgnxoKwh0IH0zYSBQyH-cJk",
  authDomain: "fir-auth-2826f.firebaseapp.com",
  projectId: "fir-auth-2826f",
  storageBucket: "fir-auth-2826f.appspot.com",
  messagingSenderId: "539627201294",
  appId: "1:539627201294:web:9edba18f8015621fcdad5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
