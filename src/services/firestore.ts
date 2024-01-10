import { QueryFieldFilterConstraint, addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../components/firebase';

function FirestoreService<T>(basePath: string) {
  const collection$ = async (queryFn?: QueryFieldFilterConstraint) => {
    if (queryFn) {
      return getDocs(query(collection(db, `${basePath}`), queryFn)).finally(() => {
        console.groupCollapsed(`Firestore Streaming [${basePath}] [collection$]`);
        console.groupEnd();
      });
    }
    return getDocs(collection(db, `${basePath}`)).finally(() => {
      console.groupCollapsed(`Firestore Streaming [${basePath}] [collection$]`);
      console.groupEnd();
    });
  };

  const create = async (newValue: T) => {
    return addDoc(collection(db, `${basePath}`), { newValue }).then(() => {
      console.groupCollapsed(`Firestore Service [${basePath}] [create]`);
      console.log(newValue);
      console.groupEnd();
    });
  };

  return { collection$, create };
}

export default FirestoreService;
