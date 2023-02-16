import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithPopup,
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
  url: 'https://santajuanita.page.link/V9Hh',
  // This must be true.
  handleCodeInApp: true,
};

export const signUpWithEmail = (email) => {
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
  if (isSignInWithEmailLink(auth, window.location.href)) {
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
        // You can access the new user via result.user
        console.log(result.user, result.providerId);
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        console.log(error);
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

const createUserDoc = async (userAuth, addicionalData) => {
  if (!userAuth) return;
  const createdAt = new Date();
  const { displayName, email } = userAuth;
  const userRef = doc(db, 'users', userAuth.uid);
  const snapshot = await getDoc(userRef);
  const newUser = {
    createdAt,
    displayName,
    email,
    ...addicionalData,
  };

  if (!snapshot.exists()) {
    await setDoc(doc(db, 'users', userAuth.uid), newUser);
  }

  return userRef;
};

export function onAuthStateChange(callback, action) {
  console.log(action);
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserDoc(userAuth);
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
      console.log(errorCode, errorMessage, email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      return credential;
    });
};
