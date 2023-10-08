import React from 'react'

import { Button } from '../../../shared/components'
import { useDeleteSchedule } from '../../../shared/hooks'

import { deleteButtonStyles } from '../index.styles'

interface IProps {
 id?: string
}

export const DeleteButton: React.FC<IProps> = ({ id }) => {
  const {deleteHandler, disabled} = useDeleteSchedule(id)

  return (
    <Button text='Delete' type='button' customStyles={deleteButtonStyles}
    disabled={disabled} onClick={deleteHandler}/>
  )
}
