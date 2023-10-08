import React from 'react'

import { toggleState } from '../utils'

export const useDialog = () => {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = toggleState(setOpen)

  return {
    open,
    toggleOpen
  }
}