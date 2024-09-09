import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRgxs4dQCbDQFBaKcpv0f9Cz5zQB8QWs8",
  authDomain: "to-do-list-b5d3c.firebaseapp.com",
  projectId: "to-do-list-b5d3c",
  storageBucket: "to-do-list-b5d3c.appspot.com",
  messagingSenderId: "537488982504",
  appId: "1:537488982504:web:2debe0a42df5d7e46ee45d",
  measurementId: "G-X8YX3DFYWN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
