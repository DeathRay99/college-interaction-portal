import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBve3Oy3LNTfgusyVmwtbcNOzoqicKLH7M",
  authDomain: "college-portal-14f75.firebaseapp.com",
  databaseURL: "https://college-portal-14f75-default-rtdb.firebaseio.com",
  projectId: "college-portal-14f75",
  storageBucket: "college-portal-14f75.appspot.com",
  messagingSenderId: "925241818244",
  appId: "1:925241818244:web:27f9f4c5ab1ac0bfb856d1",
  measurementId: "G-X47TZW6K40"
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage=getStorage(app);