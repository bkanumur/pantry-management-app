import { auth } from './firebase-config'; // adjust the path as necessary

export const signup = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error("Error signing up: " + error.message);
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error("Error logging in: " + error.message);
  }
};
