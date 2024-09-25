import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    }).catch((error) => {
      console.error(error);
      return undefined;
    });
};

export const googleSignOut = async () => {
  return await signOut(auth).then(() => {
    return true;
  }).catch((error) => {
    console.error(error);
    return false;
  });
};