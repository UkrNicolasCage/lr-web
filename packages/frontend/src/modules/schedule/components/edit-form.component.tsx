import React from 'react'
import Select from 'react-select'
import { Field } from 'react-final-form'

import { Button, Dropdown, Form, FormInput } from '../../../shared/components'
import { SCHEDULE_FORM_DATA } from '../../../shared/constants'
import { useEditSchedule } from '../../../shared/hooks'

interface IProps {
  id?: string
}

export const EditForm: React.FC<IProps> = ({ id }) => {
  const {disabled, submitHandler, stationOptions, initValues, validate} = useEditSchedule(id)

  return (
    <Form onSubmit={submitHandler} initialValues={initValues} validationSchema={validate}>
      {SCHEDULE_FORM_DATA.map(({isSelect, label, mask, name, placeholder,}, index) => {
        return <Field name={name} key={name}>
            {({ input, meta }): React.JSX.Element => {
              return isSelect ?
                <Dropdown input={input} options={stationOptions} label={label} meta={meta}
                /> :
                <FormInput {...input} label={label} mask={mask}
                placeholder={placeholder} meta={meta}/>
            }}
          </Field>
      })}
      <div>
        <Button text='Reset' type='reset'/>
        <Button text='Update' type='submit' disabled={disabled} />
      </div>
    </Form>
  )
}
