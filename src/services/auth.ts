import { GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';
import { getAuthInstance } from '../components/firebase';
import FirestoreService from './firestore';
import User from '../interfaces/User';

export async function signInWithGoogle(setUser: any) {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account ',
  });
  const auth = await getAuthInstance();
  return auth.signInWithPopup(provider).then((userCredential) => {
    setUser({
      name: userCredential.user?.displayName,
    });
    return userCredential;
  });
}

export async function signOut(clearUser: any) {
  const auth = await getAuthInstance();
  return auth.signOut().then(() => {
    clearUser();
  });
}

export async function forgotPassword(email: string) {
  const auth = await getAuthInstance();
  return auth.sendPasswordResetEmail(email).then(() => {});
}

export async function signIn(setUser: any, email: string, password: string) {
  const auth = await getAuthInstance();
  return auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    if (userCredential.user?.emailVerified) {
      FirestoreService('users')
        .doc$(userCredential.user.uid)
        .then((doc) => {
          const user = doc.data();
          setUser(user);
          return userCredential;
        });
    }
  });
}

export async function createAccount(user: User, password: string) {
  const auth = await getAuthInstance();
  return auth.createUserWithEmailAndPassword(user.email, password).then((userCredential) => {
    if (userCredential.user !== null) {
      return FirestoreService('users')
        .createWithId(userCredential.user.uid, {
          displayName: user.displayName,
        })
        .then(() => {
          if (userCredential.user !== null) {
            return sendEmailVerification(userCredential.user);
          }
          return null;
        });
    }
    return null;
  });
}
