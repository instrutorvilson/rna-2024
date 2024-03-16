import { getApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMctTHh0RkpmhX3N_29YqRV6181CIHm8s",
  authDomain: "rna-2024.firebaseapp.com",
  projectId: "rna-2024",
  storageBucket: "rna-2024.appspot.com",
  messagingSenderId: "1011058574613",
  appId: "1:1011058574613:web:de63558e3740adb0c1151c"
};

const app = initializeApp(firebaseConfig)
export default app