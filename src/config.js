import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAgm9T_oVOLiRcHGBzd7PNNMmmH9lGZZGs",
  authDomain: "chatapp-33dd7.firebaseapp.com",
  projectId: "chatapp-33dd7",
  storageBucket: "chatapp-33dd7.appspot.com",
  messagingSenderId: "290637226400",
  appId: "1:290637226400:web:2bcff773c8416a90f244c5",
  measurementId: "G-Q3RSYKHX93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };

