// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// authentication
import { getAuth } from 'firebase/auth'
// firebase database
import { getDatabase } from 'firebase/database'
// firebase storage
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFbVpg58pzWhR-P-5bHghB7cbB-Ii30Pg",
  authDomain: "makemytravel-1dea8.firebaseapp.com",
  projectId: "makemytravel-1dea8",
  storageBucket: "makemytravel-1dea8.appspot.com",
  messagingSenderId: "464136824068",
  appId: "1:464136824068:web:8ba18fa2827fe2d0281c51",
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseapp);
export let database = getDatabase(firebaseapp);
export let storage = getStorage(firebaseapp);

export default firebaseapp;