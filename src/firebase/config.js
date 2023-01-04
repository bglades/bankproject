import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCB4EDXVI7Q9QHXXwPNYVzX2nGlMOYF0TA",
    authDomain: "goodbank-da24b.firebaseapp.com",
    projectId: "goodbank-da24b",
    storageBucket: "goodbank-da24b.appspot.com",
    messagingSenderId: "425278026146",
    appId: "1:425278026146:web:56a7d292602caf9bf7c2fb"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //create timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }