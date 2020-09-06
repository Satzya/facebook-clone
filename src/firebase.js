import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCt7nLv6Ttml3By1qrQoF-1iEw6elOHDc",
  authDomain: "facebook-clone-141fe.firebaseapp.com",
  databaseURL: "https://facebook-clone-141fe.firebaseio.com",
  projectId: "facebook-clone-141fe",
  storageBucket: "facebook-clone-141fe.appspot.com",
  messagingSenderId: "1008877327411",
  appId: "1:1008877327411:web:0ba52d750b766f9b4f7f46",
  measurementId: "G-SM88DPZVS3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
