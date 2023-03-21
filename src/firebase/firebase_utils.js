//import { firestore } from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTfJwVV27VRZBXXCqLlYKlZGPAiM7NSX8',
  authDomain: 'santa-juanita-377619.firebaseapp.com',
  projectId: 'santa-juanita-377619',
  storageBucket: 'santa-juanita-377619.appspot.com',
  messagingSenderId: '50199812592',
  appId: '1:50199812592:web:ce6c5dc0cb3eee37646535',
  measurementId: 'G-FW4YJER88R',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductsFromDataBase = async () => {
  const snapshot = await getDocs(collection(db, 'products'));
  const productosArray = await snapshot.docs.map((doc) => doc);
  let productosData = new Object();
  if (productosArray) {
    productosArray.map((doc) => {
      productosData = {
        ...productosData,
        [doc.id]: doc.data(),
      };
    });
    return productosData;
  }
  return;
};

export const getStockFromDataBase = async () => {
  const querySnapshot = await getDocs(collection(db, 'stock'));
  const stock = querySnapshot.docs.map((doc) => doc.data());

  return stock;
};

export const getUsersFromDatabase = async () => {
  const querySnapshot = await await getDocs(collection(db, 'users'));

  const users = querySnapshot.docs.map((user) => ({
    ...user.data(),
    id: user.id,
    orders: user.orders
      ? user.orders?.map((order) => ({
          ...order,
          createdAt: order.createdAt,
        }))
      : [],
  }));

  return users;
};

export const decrementStock = (cart, stocks) => {
  const updatedStocks = stocks.map((item) => {
    cart.forEach((producto) => {
      if (item.id === producto.id) {
        if (producto.type === 'vela') {
          item = {
            ...item,
            stock: {
              ...item.stock,
              [producto.size]:
                item.stock[producto.size] > 0
                  ? item.stock[producto.size] - producto.quantity
                  : 0,
            },
          };
        } else {
          item = {
            ...item,
            stock: item.stock > 0 ? item.stock - producto.quantity : 0,
          };
        }
      }
    });
    return item;
  });

  return updatedStocks;
};

export const decrementStocktoDatabase = async (cart, stocks) => {
  const updatedStocks = decrementStock(cart, stocks);
  const collectionName = 'stock';
  Object.keys(updatedStocks).forEach(async (docKey) => {
    await setDoc(
      doc(db, collectionName, updatedStocks[docKey].name),
      updatedStocks[docKey]
    );
  });
};

export const setContactDocument = async (data) => {
  const createdAt = new Date();
  const dataDoc = {
    ...data,
    id: uuidv4(),
    createdAt,
  };
  const docRef = doc(db, 'contacts', dataDoc.id);

  return setDoc(docRef, dataDoc)
    .then(() => {
      console.log('Mensaje enviada con sucesso!');
      return true;
    })
    .catch((error) => {
      console.log(`Hubo un error inesperado: ${error}`);
      return false;
    });
};
