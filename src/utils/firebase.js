// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsVt6942FgDg8evSlZAeum52xmGh03ajg",
  authDomain: "netflixgpt-4502b.firebaseapp.com",
  projectId: "netflixgpt-4502b",
  storageBucket: "netflixgpt-4502b.appspot.com",
  messagingSenderId: "1000752487400",
  appId: "1:1000752487400:web:626107bc87534a909fa25d",
  measurementId: "G-T7N8KV62P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();