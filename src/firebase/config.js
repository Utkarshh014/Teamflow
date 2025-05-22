import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_USx3Ul0daM5NCe2eV4PtSvRUjEze_1Q",
  authDomain: "teamflow-65611.firebaseapp.com",
  projectId: "teamflow-65611",
  storageBucket: "teamflow-65611.firebasestorage.app",
  messagingSenderId: "828290442154",
  appId: "1:828290442154:web:fc562f1d866fbdcd5a01d3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
