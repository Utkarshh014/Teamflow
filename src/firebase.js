import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAObPYJ_DA-wrY1XBrE7qSRXIVkb5d44h8",
  authDomain: "teamflow-83482.firebaseapp.com",
  projectId: "teamflow-83482",
  storageBucket: "teamflow-83482.firebasestorage.app",
  messagingSenderId: "710805811438",
  appId: "1:710805811438:web:d9c333014bfadde73103ff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider };
export default db;