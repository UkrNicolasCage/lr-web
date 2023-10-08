import React from 'react'
import InputMask from 'react-input-mask';
import { FieldMetaState } from 'react-final-form';

import { classBuilder } from '../../../shared/utils'

import { inputStyles } from './index.styles'

interface INonDefaultInputProps {
  label?: string
  customStyles?: string
  withoutLabel?: boolean
  mask?: string
  meta?: FieldMetaState<any>
}

type InputProps = INonDefaultInputProps & React.InputHTMLAttributes<HTMLInputElement>

export const FormInput: React.FC<InputProps> = (props) => {
  const { meta } = props
  const error = (meta?.touched && meta.error) || (!meta?.dirtySinceLastSubmit && meta?.submitError)

  return (
    <div className={classBuilder([inputStyles(Boolean(error)), props.customStyles]) }>
      {!props.withoutLabel ? <label>{props.label}</label> : null}
      <InputMask {...props} mask={props.mask ?? ''}/>
      {error ? <p role='alert'>{error}</p> : null}
    </div>
  )
}
