import { initializeApp } from 'firebase/app';
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
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
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
  const createdAt = new Date();
  let { displayName, email } = userAuth;
  if (!displayName) displayName = addicionalData?.displayName || email;
  const userRef = doc(db, 'users', userAuth.uid);
  const snapshot = await getDoc(userRef);
  console.log(userAuth, snapshot);
  const newUser = {
    createdAt,
    displayName,
    email,
    ...addicionalData,
  };

  if (!snapshot.exists()) {
    await setDoc(doc(db, 'users', userAuth.uid), newUser);
  } else {
    await setDoc(
      userRef /* VER PORQUE NAO ACTUALIZA METODOS DE LOGIN */,
      {
        method: [...snapshot.data().method, addicionalData.method],
        displayName: displayName,
      },
      { merge: true }
    );
  }

  return userRef;
};

export function onAuthStateChange(callback, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    console.log(userAuth);
    if (userAuth) {
      const userRef = await createUserDoc(userAuth, {
        method: await fetchSignInMethodsForEmail(auth, userAuth.email),
      });
      const snapshot = await getDoc(userRef);
      console.log(userRef, snapshot);

      callback(action({ id: snapshot.id, ...snapshot.data() }));
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
  const auth = getAuth();
  const { name, lastname, email, password } = formInputsValue;
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, userCredential);
      userCredential.user.displayName = `${name.value} ${lastname.value}`;
    })
    .catch((error) => console.log(`${error.code} - ${error.message}`));
};

export const LoginWithEmailAndPassword = async (formInputsValue) => {
  const auth = getAuth();
  const { email, password } = formInputsValue;

  signInWithEmailAndPassword(auth, email.value, password.value).then(
    (userCredential) => {
      console.log(userCredential, userCredential.user);
    }
  );
};
