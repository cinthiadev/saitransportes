// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAePOiQ3NjXk1Ibj4Af8mWqlciR7POaHFc",
    authDomain: "blog-saitransportes.firebaseapp.com",
    projectId: "blog-saitransportes",
    storageBucket: "blog-saitransportes.appspot.com",
    messagingSenderId: "933140245266",
    appId: "1:933140245266:web:4f6127937ca516f182a1cb",
    measurementId: "G-QQMD1V53VJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { firebaseApp, auth, db, storage };