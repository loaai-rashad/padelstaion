import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBtZphsTNxEM7M5neSOHykb-tFPIpqEYjg",
  authDomain: "padelstation-2ede1.firebaseapp.com",
  projectId: "padelstation-2ede1",
  storageBucket: "padelstation-2ede1.appspot.com",
  messagingSenderId: "165143363186",
  appId: "1:165143363186:web:6c4127aa88133a3640cceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
