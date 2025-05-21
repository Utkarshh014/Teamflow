import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQ9RY19OJ99MOl6HkY781EECawxKnMwWM",
  authDomain: "teamflow-f42d7.firebaseapp.com",
  projectId: "teamflow-f42d7",
  storageBucket: "teamflow-f42d7.appspot.com",
  messagingSenderId: "778851208830",
  appId: "1:778851208830:web:eda0b7c577934a9d29d22f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
