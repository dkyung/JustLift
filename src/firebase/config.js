import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDuoaMifJI47KeE8xNMD0va3ewNg5-VhhQ',
  authDomain: 'justlift-3b719.firebaseapp.com',
  projectId: 'justlift-3b719',
  storageBucket: 'justlift-3b719.appspot.com',
  messagingSenderId: '590340984999',
  appId: '1:590340984999:web:fe9430f0e97a8e0fc38b82',
  measurementId: 'G-NGNP4TCBDW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
