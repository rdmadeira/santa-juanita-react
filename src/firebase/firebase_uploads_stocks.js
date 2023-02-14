// file to send stock to firebase

const dataProd = require('./productos.json');

const createStock = () => {
  const productos = dataProd.todoslosproductos.productos;
  const updatedStocks = productos.map((producto) => {
    if (producto.type === 'vela')
      return {
        id: producto.id,
        type: 'vela',
        name: producto.name,
        stock: {
          medium: producto.content.medium.stock,
          big: producto.content.big.stock,
        },
      };
    return {
      id: producto.id,
      stock: producto.stock,
      name: producto.name,
      type: producto.type,
    };
  });

  return updatedStocks;
};

const dataStock = createStock();

var admin = require('firebase-admin');

var serviceAccount = require('./santa-juanita_key_firebase');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const collectionName = 'stock';

const firestore = admin.firestore();
const settings = { timetampsInSnapshots: true };
firestore.settings(settings);

if (dataStock && typeof dataStock === 'object') {
  Object.keys(dataStock).forEach((docKey) => {
    firestore
      .collection(collectionName)
      .doc(dataStock[docKey].name)
      .set(dataStock[docKey])
      .then((res) => {
        console.log('Document ' + docKey + ' created!', res);
      })
      .catch((error) => console.log(error));
  });
}
