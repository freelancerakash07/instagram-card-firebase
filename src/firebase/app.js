// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ7FuriCh1lHtWXTFf6MCMK3oB8lSkcf8",
  authDomain: "mern-stack-3d0f6.firebaseapp.com",
  projectId: "mern-stack-3d0f6",
  storageBucket: "mern-stack-3d0f6.appspot.com",
  messagingSenderId: "450890101020",
  appId: "1:450890101020:web:153f9de9b7af3770e20ad9"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);