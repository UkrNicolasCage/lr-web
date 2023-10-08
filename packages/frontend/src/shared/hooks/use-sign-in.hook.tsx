import React from 'react';

import { authService } from '../services';
import { IAuthCreds } from '../types';
import { setUserInfo } from '../utils';

export const useSignIn = () => {
  const [disabled, setDisabled] = React.useState(false);

  const submitHandler = async (data: IAuthCreds) => {
    setDisabled(true);
    try {
      const user = await authService.signIn(data);

      setUserInfo(true, user);
      return {}
    } catch (error) {
      return error.response.data
    } finally {
      setDisabled(false);
    }
  };

  return {
    disabled,
    submitHandler,
  }
}