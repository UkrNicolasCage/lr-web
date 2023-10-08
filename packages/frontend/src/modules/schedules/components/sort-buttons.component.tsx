import React from 'react'

import { ISchedule } from '../../../shared/types'
import { useSort } from '../../../shared/hooks'

import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg'

import { sortButtonsStyles } from '../index.styles'

interface IProps {
  field: keyof ISchedule
}

export const SortButtons: React.FC<IProps> = ({field}) => {
  const {sortAsc, sortDesc} = useSort(field)

  return (
    <div className={sortButtonsStyles}>
      <button type='button' onClick={sortDesc}><ArrowLeftIcon /></button>
      <button type='button' onClick={sortAsc}><ArrowLeftIcon /></button>
    </div>
  )
}
