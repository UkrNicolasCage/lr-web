import React from 'react'
import { Link } from 'react-router-dom'

import { authLinkStyles } from './index.styles'

interface IProps {
  text: string
  to: string
}

export const AuthLink: React.FC<IProps> = ({text, to}) => {
  return (
    <Link to={to} className={authLinkStyles}>
      {text}
    </Link>
  )
}
