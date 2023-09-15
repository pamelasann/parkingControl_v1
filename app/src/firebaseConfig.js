import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFYNqX3IgHN4pPoYi5mOaokaZwBlSmEAU",
  authDomain: "parkingspots-b0799.firebaseapp.com",
  databaseURL: "https://parkingspots-b0799-default-rtdb.firebaseio.com",
  projectId: "parkingspots-b0799",
  storageBucket: "parkingspots-b0799.appspot.com",
  messagingSenderId: "734558909084",
  appId: "1:734558909084:web:6ca05ddd8fb6cfc3c83359",
  measurementId: "G-GKCHVFG4QM"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

const db = getDatabase();
export { db };