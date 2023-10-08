import React from 'react'
import { Field } from 'react-final-form'

import { Button, Dialog, Dropdown, Form, FormInput } from '../../../shared/components'
import { useAddSchedule } from '../../../shared/hooks'
import { SCHEDULE_FORM_DATA } from '../../../shared/constants'

import { addScheduleDialogStyles, addScheduleStyles } from '../index.styles'

interface IProps {
  open: boolean
  toggleOpen: () => void
}

export const AddSchedule: React.FC<IProps> = ({open, toggleOpen}) => {
  const {disabled, submitHandler, stationOptions, validate} = useAddSchedule(toggleOpen)

  const content = <div className={addScheduleStyles}>
    <h2>Add schedule</h2>
    <Form onSubmit={submitHandler} validationSchema={validate}>
      {SCHEDULE_FORM_DATA.map(({isSelect, label, mask, name, placeholder}, index) => {
        return <Field name={name} key={name}>
            {({ input, meta }): React.JSX.Element => {
              return isSelect ?
                <Dropdown input={input} options={stationOptions} label={label} meta={meta}/> :
                <FormInput {...input} label={label} mask={mask} placeholder={placeholder} meta={meta}/>
            }}
          </Field>
      })}
      <div>
        <Button text='Cancel' onClick={toggleOpen}/>
        <Button text='Add' type='submit' disabled={disabled} />
      </div>
    </Form>
  </div>

  return (
    <Dialog open={open} onClose={toggleOpen} content={content} classes={addScheduleDialogStyles}/>
  )
}
