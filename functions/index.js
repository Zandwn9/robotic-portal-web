const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

exports.createUserDoc = functions.https.onCall((data, context) => {
  firestore.collection("users").doc(context.auth.uid).set(data);
});

exports.createToken = functions.https.onCall((data, context) => {
  const uid = context.auth.uid;
  return new Promise((resolve, reject) => {
    firestore
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        console.log(doc.data());
        admin
          .auth()
          .createCustomToken(uid, doc.data())
          .then((customToken) => {
            console.log(`The customToken is: ${customToken}`);
            resolve({ status: "success", customToken: customToken });
          })
          .catch((error) => {
            console.error(`Something happened buddy: ${error}`);
            reject({ status: "error" });
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  });
});
