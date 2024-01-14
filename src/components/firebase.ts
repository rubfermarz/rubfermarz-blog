import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBrPrUpeq3yZ-2_zx8dCL2NJ_y1Cemot6c',
  authDomain: 'rubfermarz-blog.firebaseapp.com',
  projectId: 'rubfermarz-blog',
  storageBucket: 'rubfermarz-blog.appspot.com',
  messagingSenderId: '876038836914',
  appId: '1:876038836914:web:69364e9ae2d2ccb61cafab',
  measurementId: 'G-T1JPYXJN0E',
};

const app = firebase.initializeApp(firebaseConfig);

export async function getFirestoreInstance() {
  if (!firebase.firestore) {
    await import('firebase/compat/firestore');
  }

  return firebase.firestore(app);
}

export async function getAnalyticsInstance() {
  if (!firebase.analytics) {
    await import('firebase/compat/analytics');
  }

  return firebase.analytics(app);
}

export async function getAuthInstance() {
  if (!firebase.auth) {
    await import('firebase/compat/auth');
  }
  return firebase.auth(app);
}
