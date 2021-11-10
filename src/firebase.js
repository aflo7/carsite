// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCslmFDfZ-7iaqHlX4dWa5xC1NcTZ2I-iY",
  authDomain: "carsite-f3faf.firebaseapp.com",
  projectId: "carsite-f3faf",
  storageBucket: "carsite-f3faf.appspot.com",
  messagingSenderId: "36199525112",
  appId: "1:36199525112:web:b0e54425ca30d9615be90d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore();