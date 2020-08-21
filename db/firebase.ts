import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

try {
  firebase.app()
} catch {
  const firebaseConfig = {
    apiKey: 'AIzaSyA28a4oJcB33UBwad3repaklPQnsp4PjxQ',
    authDomain: 'developh-vietnam.firebaseapp.com',
    databaseURL: 'https://developh-vietnam.firebaseio.com',
    projectId: 'developh-vietnam',
    storageBucket: 'developh-vietnam.appspot.com',
    messagingSenderId: '481826606763',
    appId: '1:481826606763:web:99168b78acc3f6a0f5f1ee',
    measurementId: 'G-VZ9NTYRGHM',
  }

  firebase.initializeApp(firebaseConfig)
}

export default firebase
