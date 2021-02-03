import { clientsCollection, firestore } from "../index";
export const getClientsList = () => {
  return new Promise((resolve, reject) => {
    clientsCollection
      .get()
      .then((snapshot) => resolve(snapshot.docs.map((doc) => doc.data())))
      .catch((e) => reject(e.message));
  });
};

export const getClientNamesList = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collectionGroup("public")
      .get()
      .then((snapshot) => {
        resolve(snapshot.docs.map((infoDoc) => infoDoc.data().name));
      });
  });
};

export const getClientDetails = async (clientId) => {
  return (await clientsCollection.doc(clientId)).data();
};

export { clientsCollection };
