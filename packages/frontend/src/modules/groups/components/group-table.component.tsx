import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RouterKeys } from '../../../router/keys'
import { formatDate } from '../../../shared/utils'
import { TABLE_HEADER } from '../consts'

import { schedulesTableStyles } from '../index.styles'

export const SchedulesTable: React.FC = () => {
  const navigate = useNavigate()

  const navigateToSchedule = (id: string) => {
    return () => {
        navigate(`/${RouterKeys.GROUP}/${id}`)
      }
}

  return (
    <table className={schedulesTableStyles}>
          <thead>
            <tr>
              {TABLE_HEADER.map(({label, value, withoutSort}) => {
                return <th key={value.toString()}>
                  {label}
                  </th>
              })
              }
            </tr>
          </thead>

          <tbody>

          </tbody>
      </table>
  )
}
