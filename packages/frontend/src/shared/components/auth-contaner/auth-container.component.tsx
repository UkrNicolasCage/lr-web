import React from 'react'
import { Outlet } from 'react-router-dom'

import { authContainerStyles } from './index.styles'

export const AuthContainer: React.FC = () => {
  return (
    <div className={authContainerStyles}>
      <div />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
