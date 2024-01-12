import {
  doc,
  getDoc,
  QueryFieldFilterConstraint,
  addDoc,
  collection,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';
import { db } from '../components/firebase';

function FirestoreService(basePath: string) {
  const collection$ = async (queryFn?: QueryFieldFilterConstraint) => {
    if (queryFn) {
      return getDocs(query(collection(db, `${basePath}`), queryFn)).finally(() => {});
    }
    return getDocs(collection(db, `${basePath}`)).finally(() => {});
  };

  const doc$ = async (id: string) => {
    return getDoc(doc(db, `${basePath}`, `${id}`)).finally(() => {});
  };

  const createWithId = async (id: string, newValue: any) => {
    return setDoc(doc(db, `${basePath}`, `${id}`), newValue).then(() => {});
  };

  const create = async (newValue: any) => {
    return addDoc(collection(db, `${basePath}`), newValue).then(() => {});
  };

  return { collection$, create, createWithId, doc$ };
}

export default FirestoreService;
