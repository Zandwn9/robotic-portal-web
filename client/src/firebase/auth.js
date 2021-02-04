import { auth, usersCollection, firestore } from "./index";
import firebase from "firebase/app";
import axios from "axios";
import { clientsCollection } from "./firestore/clients";

const getCustomToken = (credential) => {
  return new Promise((resolve, reject) => {
    credential.user.getIdToken(true).then((idToken) => {
      axios
        .post(
          `${process.env.REACT_APP_API}/createToken`,
          JSON.stringify({ data: {} }),
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          firebase
            .auth()
            .signInWithCustomToken(res.data.result.customToken)
            .then((userCredential) => {
              resolve(userCredential.user);
            })
            .catch((error) => {
              console.log(error.code);
              reject({ success: false, message: error.message });
            });
        })
        .catch((err) => console.log(err.message));
    });
  });
};

export const registerWithEmail = ({ email, company, fullName, password }) =>
  auth.createUserWithEmailAndPassword(email, password).then((credential) => {
    const uid = credential.user.uid;
    firestore
      .collectionGroup("public")
      .where("name", "==", company)
      .get()
      .then((matchingClients) => {
        const clientId = matchingClients.docs[0].ref.path.split("/")[1];
        usersCollection
          .doc(uid)
          .set({ clientId, fullName })
          .then((doc) => {
            console.log("success");
            getCustomToken(credential);
            clientsCollection
              .doc(clientId)
              .collection("public")
              .doc("info")
              .update({
                members: firebase.firestore.FieldValue.arrayUnion(uid),
              });
          });
      });
  });

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export const loginWithGoogle = (provider) =>
  auth.signInWithPopup(provider).then(getCustomToken);

export const logout = () => auth.signOut();

export const passwordReset = (email) => auth.sendPasswordResetEmail(email);

export const loginWithEmail = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password).then(getCustomToken);
