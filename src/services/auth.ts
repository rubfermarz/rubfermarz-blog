import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../components/firebase';
import FirestoreService from './firestore';
import User from '../interfaces/User';

export async function signInWithGoogle(setUser: any) {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account ',
  });

  return signInWithPopup(auth, provider).then((userCredential) => {
    setUser({
      name: userCredential.user.displayName,
    });
    return userCredential;
  });
}

export async function signOut(clearUser: any) {
  return auth.signOut().then(() => {
    clearUser();
  });
}

export async function signIn(setUser: any, email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    FirestoreService('users')
      .doc$(userCredential.user.uid)
      .then((doc) => {
        const user = doc.data();
        setUser(user);
      });
    return userCredential;
  });
}

export async function createAccount(user: User, password: string) {
  return createUserWithEmailAndPassword(auth, user.email, password).then((userCredential) => {
    FirestoreService('users').createWithId(userCredential.user.uid, {
      displayName: user.displayName,
    });
    sendEmailVerification(userCredential.user).then(() => {});
    return userCredential;
  });
}
