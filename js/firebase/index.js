const firebaseConfig = {
  apiKey: "AIzaSyDke2e8951oS0BieUe2M11PB5ZI1bhQSWM",
  authDomain: "first-pj-2022-a5f9c.firebaseapp.com",
  projectId: "first-pj-2022-a5f9c",
  storageBucket: "first-pj-2022-a5f9c.appspot.com",
  messagingSenderId: "910818166338",
  appId: "1:910818166338:web:04bffcb9762a892e81cfdb",
  measurementId: "G-73YZZHSLM3"
};

const appFb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
