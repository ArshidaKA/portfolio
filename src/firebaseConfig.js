
import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCDz2whS0I72F5PIjVwg0Gf9983LEoHzMo",
  authDomain: "portfolio-460c9.firebaseapp.com",
  projectId: "portfolio-460c9",
  storageBucket: "portfolio-460c9.firebasestorage.app",
  messagingSenderId: "809962628870",
  appId: "1:809962628870:web:05e4aeffb2905a4270a087"
};


const app = initializeApp(firebaseConfig);
 const db=getFirestore(app);
 export {db,collection,addDoc} ;