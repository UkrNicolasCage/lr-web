import React from 'react'
import { authService } from '../services'
import { setUserInfo } from '../utils'
import { toast } from 'react-toastify'
import { ERROR_TOAST_MESSAGES } from '../constants'

export const useLogOut = () => {
  const [disabled, setDisabled] = React.useState(false)

  const logOutHandler = async () => {
    setDisabled(true)
    try {
      authService.logout()
      setUserInfo(false, null)
    } catch (e) {
      toast.error(ERROR_TOAST_MESSAGES.SOMETHIG_WENT_WRONG_LOGOUT)
    } finally {
      setDisabled(false)
    }
  }

  return {
    disabled,
    logOutHandler,
  }
}