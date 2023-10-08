import React from 'react';

import { authService } from '../services';
import { ISignUpCreds } from '../types';
import { PASSWORD_ERRORS } from '../constants';
import { setUserInfo } from '../utils';

export const useSignUp = () => {
  const [disabled, setDisabled] = React.useState(false);

  const submitHandler = async ({confirmPassword, email, password}: ISignUpCreds) => {
    setDisabled(true);
    try {
      if (password !== confirmPassword) {
        return {
          confirmPassword: PASSWORD_ERRORS.DONT_MATCH,
        }
      }

      const user = await authService.signUp({email, password});

      setUserInfo(true, user);
      return {}
    } catch (error) {
       return error.response.data;
    } finally {
      setDisabled(false);
    }
  };

  return {
    disabled,
    submitHandler,
  }
}