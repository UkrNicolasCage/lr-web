import React from 'react'
import { Field } from 'react-final-form'

import { Button, Dialog, Dropdown, Form, FormInput } from '../../../shared/components'
import { SCHEDULE_FORM_DATA } from '../../../shared/constants'

import { addScheduleDialogStyles, addScheduleStyles } from '../index.styles'

interface IProps {
  open: boolean
  toggleOpen: () => void
}

export const AddSchedule: React.FC<IProps> = ({open, toggleOpen}) => {
  const content = <div className={addScheduleStyles}>
    <h2>Add Member</h2>
    <Form onSubmit={() => {}} >
      {SCHEDULE_FORM_DATA.map(({isSelect, label, mask, name, placeholder}, index) => {
        return <Field name={name} key={name}>
            {({ input, meta }): React.JSX.Element => {
              return <FormInput {...input} label={label} mask={mask} placeholder={placeholder} meta={meta}/>
            }}
          </Field>
      })}
      <div>
        <Button text='Cancel' onClick={toggleOpen}/>
        <Button text='Add' type='submit'/>
      </div>
    </Form>
  </div>

  return (
    <Dialog open={open} onClose={toggleOpen} content={content} classes={addScheduleDialogStyles}/>
  )
}
