// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwoE0yKLuMJV95qEJlvZzEwd4FcprQSE",
  authDomain: "expense-tracker-fc32b.firebaseapp.com",
  projectId: "expense-tracker-fc32b",
  storageBucket: "expense-tracker-fc32b.appspot.com",
  messagingSenderId: "156607784799",
  appId: "1:156607784799:web:36f9f05301121447d978ea"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);