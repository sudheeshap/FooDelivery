import CustomerModel from '../models/customer.model';
import { auth, firestore } from './firebase-api';

/**
 * Create user profile
 */
export const createUserProfile = async (user) => {
  // No user found
  if (!user.id) {
    return null;
  }

  const userRef = firestore.doc(`user/${user.id}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { password, passwordConfirm, ...rest } = user;

    try {
      await userRef.set(rest);
    } catch (error) {
      return null;
    }
  }

  return userRef;
};

/**
 * Subscribe to authentication state
 */
export const subscribeAuth = (callback) =>
  auth.onAuthStateChanged(async (userAuth) => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      const userRef = firestore.doc(`user/${userAuth.uid}`);

      userRef.onSnapshot((snapshot) => {
        callback(snapshot.data());
      });
    }

    callback({
      id: userAuth.uid,
      email: userAuth.email,
    });
  });

/**
 * Register user
 */
export const registerUser = async (userData: CustomerModel) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password,
    );

    return userCredential;
  } catch (error) {
    return null;
  }
};

/**
 * User login
 */
export const authLogin = async (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

/**
 * User logout
 */
export const authLogout = async () => {
  const info = await auth.signOut();

  return info;
};
