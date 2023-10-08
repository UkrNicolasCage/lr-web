import React from 'react'
import Select from 'react-select';
import { FieldMetaState } from 'react-final-form';

import { ISelectOption } from '../../../shared/types';

import { selectStyles } from './index.styles';

interface IProps {
  input: any;
  meta?: FieldMetaState<any>
  label: string;
  options: Array<ISelectOption>;
}

export const Dropdown: React.FC<IProps> = ({input, label, meta, options}) => {
  const error = (meta?.touched && meta.error) || (!meta?.dirtySinceLastSubmit && meta?.submitError)

  return (
    <div className={selectStyles(Boolean(error))}>
      <label>{label}</label>
      <Select {...input} options={options} />
      {error ? <p role='alert'>{error}</p> : null}
    </div>
  )
}
