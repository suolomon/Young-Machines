import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCSpJCv26pdjcA5M6jWaXAK2dG1m8PTKrE",
  authDomain: "young-machines.firebaseapp.com",
  projectId: "young-machines",
  storageBucket: "young-machines.appspot.com",
  messagingSenderId: "528087962828",
  appId: "1:528087962828:web:7693a082739351f324de69",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
