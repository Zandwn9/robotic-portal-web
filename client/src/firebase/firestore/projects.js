import { auth, clientsCollection, firestore } from "../index";
import firebase from "firebase/app";

export const getProjectsList = async (user, clientId = null) => {
  let clientRef;
  if (!clientId) {
    clientRef = (
      await firestore
        .collectionGroup("public")
        .where("members", "array-contains", user.uid)
        .get()
    ).docs[0].ref.parent.parent;
  } else {
    clientRef = clientsCollection.doc(clientId);
  }

  const query = clientRef.collection("projects");
  query.onSnapshot((querySnapshot) => querySnapshot.docs.map(formatProject));
  return (await query.get()).docs.map(formatProject);
};

const formatProject = (projectDoc) => {
  const data = projectDoc.data();
  return {
    key: projectDoc.id,
    ...data,
    createdAt: data.createdAt.toDate(),
  };
};

export function addProject(formValues) {
  const doc = Object.entries(formValues).reduce(
    (obj, [key, val]) => (val ? { ...obj, [key]: val } : obj),
    {}
  );
  firestore
    .collection("clients")
    .doc(formValues.client)
    .collection("projects")
    .add({
      ...doc,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}
