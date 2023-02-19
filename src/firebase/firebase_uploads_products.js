// file to send products to firebase

const dataProd = require('./productos.json');
var admin = require('firebase-admin');
console.log(dataProd);

var serviceAccount = require('./santa-juanita_key_firebase');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const collectionName = 'products';

const firestore = admin.firestore();
const settings = { timetampsInSnapshots: true };
firestore.settings(settings);

if (dataProd && typeof dataProd === 'object') {
  Object.keys(dataProd).forEach((docKey) => {
    firestore
      .collection(collectionName)
      .doc(docKey)
      .set(dataProd[docKey])
      .then((res) => {
        console.log('Document ' + docKey + ' created!', res);
      })
      .catch((error) => console.log(error));
  });
}
