// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuz2jD5pbowHEMKrYLqq3dFRGtdJqkrM",
  authDomain: "the-news-dragon-d5f93.firebaseapp.com",
  projectId: "the-news-dragon-d5f93",
  storageBucket: "the-news-dragon-d5f93.appspot.com",
  messagingSenderId: "241542237481",
  appId: "1:241542237481:web:2c19e4554ea037d8047b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;