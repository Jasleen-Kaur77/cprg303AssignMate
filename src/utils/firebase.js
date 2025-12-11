import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKQU3uuJ3t0R2qBJyI2bq7mXhy9KaUI4A",
  authDomain: "assignmate-beff1.firebaseapp.com",
  projectId: "assignmate-beff1",
  storageBucket: "assignmate-beff1.firebasestorage.app",
  messagingSenderId: "419882786878",
  appId: "1:419882786878:web:6d49402519238613bd716f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);