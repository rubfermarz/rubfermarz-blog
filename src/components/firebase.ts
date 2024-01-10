import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrPrUpeq3yZ-2_zx8dCL2NJ_y1Cemot6c',
  authDomain: 'rubfermarz-blog.firebaseapp.com',
  projectId: 'rubfermarz-blog',
  storageBucket: 'rubfermarz-blog.appspot.com',
  messagingSenderId: '876038836914',
  appId: '1:876038836914:web:69364e9ae2d2ccb61cafab',
  measurementId: 'G-T1JPYXJN0E',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
