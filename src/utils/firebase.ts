// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtQAmRtfVrcqlQPqi-AQ4sMPeoyvAzLdo',
  authDomain: 'todo-app-58fb9.firebaseapp.com',
  projectId: 'todo-app-58fb9',
  storageBucket: 'todo-app-58fb9.appspot.com',
  messagingSenderId: '897475900624',
  appId: '1:897475900624:web:dbf3d9324bc6cc14dc5ad5',
  measurementId: 'G-1X5M16DE4M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };