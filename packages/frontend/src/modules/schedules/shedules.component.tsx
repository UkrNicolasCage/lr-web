import React from 'react'

import { Button } from '../../shared/components'
import { AddSchedule, Pagination, SchedulesTable, Search } from './components'
import { useDialog } from '../../shared/hooks'

import { roundButtonStyles, schedulesStyles } from './index.styles'

export const Schedules: React.FC = () => {
  const {open, toggleOpen} = useDialog()

  return (
    <div className={schedulesStyles}>
      <Search />
      <SchedulesTable />
      <Pagination />
      <Button text='+' customStyles={roundButtonStyles} onClick={toggleOpen}/>
      <AddSchedule open={open} toggleOpen={toggleOpen}/>
    </div>
  )
}
