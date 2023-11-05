import React from 'react'

import { Button } from '../../shared/components'
import { AddSchedule, SchedulesTable } from './components'
import { useDialog } from '../../shared/hooks'

import { roundButtonStyles, schedulesStyles } from './index.styles'

export const Group: React.FC = () => {
  const {open, toggleOpen} = useDialog()

  return (
    <div className={schedulesStyles}>
      <SchedulesTable />
      <Button text='+' customStyles={roundButtonStyles} onClick={toggleOpen}/>
      <AddSchedule open={open} toggleOpen={toggleOpen}/>
    </div>
  )
}
