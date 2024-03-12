// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHQtxV263VHIm-BzdJbCai78yLunUxqs",
  authDomain: "better-match-10.firebaseapp.com",
  projectId: "better-match-10",
  storageBucket: "better-match-10.appspot.com",
  messagingSenderId: "43872700960",
  appId: "1:43872700960:web:b38dedb3a4cd1387f20a45"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
export const auth = getAuth(appFirebase);