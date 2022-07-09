import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyB-x4hFRdexOZYPnJ1wu6hwMKazPKflrPQ',
  authDomain: 'chat-web-app-25492.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-25492-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-25492',
  storageBucket: 'chat-web-app-25492.appspot.com',
  messagingSenderId: '450445029260',
  appId: '1:450445029260:web:96fc62a7c662b09c9930a9',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
