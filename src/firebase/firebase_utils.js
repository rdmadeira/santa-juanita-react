import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
/*  */
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
    await productosArray.map((doc) => {
      productosData = {
        ...productosData,
        [doc.id]: doc.data(),
      };
    });
    return await productosData;
  }
  return;
};

export const getStockFromDataBase = async () => {
  const querySnapshot = await await getDocs(collection(db, 'stock'));
  const stock = querySnapshot.docs.map((doc) => doc.data());

  return await stock;
};
