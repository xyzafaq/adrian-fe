import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// Configure your credentials obtained from firebase while creating new project
const firebaseConfig = {
  apiKey: "AIzaSyCzGPlZ7zFoq4GN_g0DXYP8VhWI-tWJIMw",
  authDomain: "adrian-d5ff4.firebaseapp.com",
  projectId: "adrian-d5ff4",
  storageBucket: "adrian-d5ff4.appspot.com",
  messagingSenderId: "467310900133",
  appId: "1:467310900133:web:86e63c3494bcdb6e2e2e4c",
  measurementId: "G-GD0T9XWYLD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};