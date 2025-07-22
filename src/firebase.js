import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAObPYJ_DA-wrY1XBrE7qSRXIVkb5d44h8",
  authDomain: "teamflow-83482.firebaseapp.com",
  projectId: "teamflow-83482",
  storageBucket: "teamflow-83482.firebasestorage.app",
  messagingSenderId: "710805811438",
  appId: "1:710805811438:web:d9c333014bfadde73103ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export correctly
export { db, auth, provider };
