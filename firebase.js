// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBm1GR5Neg_OUhxThNQ4E4Cw7qAqt4oMVU",
  authDomain: "oscrdatabase-1b5c3eu72j9.firebaseapp.com",
  projectId: "oscrdatabase-1b5c3eu72j9",
  storageBucket: "oscrdatabase-1b5c3eu72j9.appspot.com", // fixed this
  messagingSenderId: "976240368439",
  appId: "1:976240368439:web:247c2565e0190ef3d658b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

// Export `db` so you can use it in other scripts
export { db };
