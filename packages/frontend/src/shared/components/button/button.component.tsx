import React from 'react'

import { classBuilder } from '../../utils'
import { colors } from '../../styles'

import { buttonStyles } from './index.styles'

interface INonDefaultButtonProps {
  text: string
  customStyles?: string
}

type ButtonProps = INonDefaultButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={classBuilder([buttonStyles(), props.customStyles]) }>
      {props.text}
    </button>
  )
}
