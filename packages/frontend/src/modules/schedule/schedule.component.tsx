import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { RouterKeys } from '../../router/keys'
import { DeleteButton, EditForm } from './components'

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'

import { scheduleStyles } from './index.styles'

export const Schedule: React.FC = () => {
  const params = useParams<{id: string}>()

  return (
    <div className={scheduleStyles}>
      <Link to={`/${RouterKeys.SCHEDULES}`}><ArrowLeftIcon />To Table</Link>

      <div>
        <h2>Update Schedule</h2>
        <DeleteButton id={params.id}/>
      </div>

      <EditForm id={params.id}/>
    </div>
  )
}
