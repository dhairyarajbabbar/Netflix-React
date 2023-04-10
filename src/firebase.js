// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// import firebase from 'firebase'
// // import {firestore as db}  from './firebase-config' 
// // import firebase from './firebase-config';

// // import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDy7_MlRSJAFLMJvOTSMmPXeuTyyaq1WCs",
  authDomain: "netflix-clone-ec752.firebaseapp.com",
  projectId: "netflix-clone-ec752",
  storageBucket: "netflix-clone-ec752.appspot.com",
  messagingSenderId: "982606505762",
  appId: "1:982606505762:web:11e39ddf4f5985ae40677b"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };



// // Initialize Firebase
// const firebaseapp = firebase.initializeApp(firebaseConfig);
// // const db=firebaseapp.firestore();
// const auth=firebase.auth();
// export default auth 
// // export default db;