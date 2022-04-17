// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWSpEC3UP7PpRSHk9Jx4UZYdNp8al5vGE",
  authDomain: "assignment-10-57605.firebaseapp.com",
  projectId: "assignment-10-57605",
  storageBucket: "assignment-10-57605.appspot.com",
  messagingSenderId: "178431585272",
  appId: "1:178431585272:web:a3ba6c441b70ab172e040d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;