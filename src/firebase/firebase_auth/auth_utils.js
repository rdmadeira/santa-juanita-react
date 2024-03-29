import { initializeApp } from 'firebase/app';
// const { initializeApp } = require('firebase-admin/app');

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  AuthErrorCodes,
} from 'firebase/auth';

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
const auth = getAuth(app);

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://santa-juanita-react.vercel.app/',
  // This must be true.
  handleCodeInApp: true,
};

export const signUpWithEmail = (email) => {
  const auth = getAuth();
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      alert(
        `${email}, link enviado al Email con sucesso!! Verifique su caja de Entradas o Spam y entre en el enlance.`
      );
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(`Hubo ub error inesperado: ${error.code} - ${error.message}`);
    });
};

export const checkIsSignInWithEmail = () => {
  const auth = getAuth();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    console.log(window.location.href, auth);
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem('emailForSignIn');
        alert(`Entraste con éxito - ${result.user.email}`);
        // You can access the new user via result.user

        /*         console.log(result.user, result.providerId); */

        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        alert(`${error.message} - ${error.code}`);
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

const createUserDoc = async (userAuth, addicionalData) => {
  if (!userAuth) return;
  const createdDateString = dateString();
  let { displayName, email } = userAuth;
  if (!displayName) displayName = addicionalData?.displayName || email;
  const userRef = doc(db, 'users', userAuth.uid);
  const snapshot = await getDoc(userRef);

  const newUser = {
    createdAt: createdDateString,
    displayName,
    email,
    orders: [],
    ...addicionalData,
  };

  if (!snapshot.exists()) {
    await setDoc(doc(db, 'users', userAuth.uid), newUser);
  }

  return userRef;
};

import { dateString } from '../../utils/orders_utils/ordersUtils';

export function onAuthStateChange(callback, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserDoc(userAuth, {
        method: await fetchSignInMethodsForEmail(auth, userAuth.email),
      });
      const snapshot = await getDoc(userRef);

      await callback(
        // no tomaba el snapshot sin el await entes del callback:linea 133!!!!!!!!!!!!
        action({
          ...snapshot.data(),
          id: snapshot.id,
        })
      );
    } else {
      callback(action(null));
    }
  });
}

export const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  auth.useDeviceLanguage();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      return { data: result.user, id: result.providerId, token: token };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      alert(`${errorCode} - ${errorMessage} - email: ${email}`);
      const credential = GoogleAuthProvider.credentialFromError(error);
      return credential;
    });
};

export const createNewUserWithEmailandPassword = async (formInputsValue) => {
  const auth = await getAuth();
  const { name, lastname, email, password } = formInputsValue;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, userCredential);
      userCredential.user.displayName = `${name.value} ${lastname.value}`;
    })
    .catch((error) => console.log(`${error.code} - ${error.message}`));
};

export const LoginWithEmailAndPassword = async (
  formInputsValue,
  setIsValidPassword
) => {
  const auth = getAuth();
  const { email, password } = formInputsValue;

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsValidPassword(true);
      return user;
    })
    .then((res) => console.log(res))
    .catch((error) => {
      if (
        error.code === AuthErrorCodes.INVALID_PASSWORD ||
        error.code === AuthErrorCodes.USER_DELETED
      ) {
        setIsValidPassword(false);
      }
      error.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER &&
        alert(`Muchos intentos, porvor acceder más tarde. ${error.message}`);
      error.code === AuthErrorCodes.INTERNAL_ERROR &&
        alert('Hubo un error En el servidor');

      return false;
    });
};

export const checkUserEmailAccounts = (formInputsValue, callback) => {
  const auth = getAuth();
  const { email } = formInputsValue;
  fetchSignInMethodsForEmail(auth, email.value).then((signInMethods) => {
    // This returns the same array as fetchProvidersForEmail but for email
    // provider identified by 'password' string, signInMethods would contain 2
    // different strings:
    // 'emailLink' if the user previously signed in with an email/link
    // 'password' if the user has a password.
    // A user could have both.
    if (
      signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) !=
      -1
    ) {
      callback(false);
      return;
    }
    if (
      signInMethods.indexOf(EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1
    ) {
      callback(true);
      /*       signUpWithEmail(email.value);
       */
      /* alert(
        `Link enviado al Email con sucesso!! Verifique su caja de Entradas o Spam y entre en el enlance.`
      ); */
    }
  });
};

/* import { createOrder } from '../../utils/orders_utils/ordersUtils';
 */
export const updateUserOrdersToStoreAndDatabase = async (
  user
  /* callback,
  actions,
  setIsSubmitted,
  navigate */
) => {
  /*   callback(actions.createOrder(newOrder));
   */ const db = getFirestore(app);

  const docRef = doc(db, 'users', user.id);

  /* const data = {
    ...user,
    orders: user.orders ? [...user.orders, newOrder] : [],
  }; */
  /* console.log(data); */

  setDoc(docRef, user, { merge: true });
};
