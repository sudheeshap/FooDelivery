import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  authLogin,
  authLogout,
  createUserProfile,
  registerUser,
  subscribeAuth,
} from '../api/auth-api.service';
import CustomerModel from '../models/customer.model';
import { updateCustomer } from '../redux/customer/customer.reducer';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  /**
   * Customer login
   */
  const login = (email, password) => {
    setIsLoading(true);

    return authLogin(email, password)
      .then((response) => response)
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  };

  /**
   * Customer register
   */
  const register = (userData) => {
    setIsLoading(true);

    return registerUser(userData)
      .then(async (userCredential) => {
        const userRef = await createUserProfile({
          ...userData,
          id: userCredential.user.uid,
        });

        return userRef;
      })
      .catch((error) => error)
      .finally(() => setIsLoading(false));
  };

  /**
   * Customer logout
   */
  const logout = () => {
    setIsLoading(true);

    authLogout().then(() => {
      const customerModel = new CustomerModel();

      dispatch(updateCustomer({ customer: customerModel.toObject() }));
      setIsLoading(false);
    });
  };

  /**
   * Subscribe to authentication state and update customer data
   */
  useEffect(() => {
    const unsubscribe = subscribeAuth((userData) => {
      dispatch(updateCustomer({ customer: userData }));
    });

    return () => unsubscribe();
  }, []);

  return { isLoading, login, register, logout };
};

export default useAuth;
