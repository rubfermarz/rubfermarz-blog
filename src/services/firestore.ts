import { getFirestoreInstance } from '../components/firebase';

function FirestoreService(basePath: string) {
  const collection$ = async (queryFn?: any) => {
    const firestore = await getFirestoreInstance();
    if (queryFn) {
      return firestore.collection(`${basePath}`).where(queryFn[0], queryFn[1], queryFn[2]).get();
    }
    return firestore.collection(`${basePath}`).get();
  };

  const doc$ = async (id: string) => {
    const firestore = await getFirestoreInstance();
    return firestore.doc(`${basePath}/${id}`).get();
  };

  const createWithId = async (id: string, newValue: any) => {
    const firestore = await getFirestoreInstance();
    return firestore
      .doc(`${basePath}/${id}`)
      .set(newValue)
      .then(() => {});
  };

  const create = async (newValue: any) => {
    const firestore = await getFirestoreInstance();
    return firestore
      .collection(`${basePath}`)
      .add(newValue)
      .then(() => {});
  };

  return { collection$, create, createWithId, doc$ };
}

export default FirestoreService;
