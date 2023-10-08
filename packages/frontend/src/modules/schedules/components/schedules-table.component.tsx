import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RouterKeys } from '../../../router/keys'
import { useGetSchedules } from '../../../shared/hooks'
import { useSchedules, useStations } from '../../../store'
import { formatDate } from '../../../shared/utils'
import { TABLE_HEADER } from '../consts'
import { SortButtons } from './sort-buttons.component'

import { schedulesTableStyles } from '../index.styles'

export const SchedulesTable: React.FC = () => {
  const navigate = useNavigate()

  const { schedules } = useSchedules()
  const { stations } = useStations()

  useGetSchedules()

  const navigateToSchedule = (id: string) => {
    return () => {
        navigate(`/${RouterKeys.SCHEDULES}/${id}`)
      }
}

  return (
    <table className={schedulesTableStyles}>
          <thead>
            <tr>
              {TABLE_HEADER.map(({label, value, withoutSort}) => {
                return <th key={value}>
                  {label}
                  {withoutSort ? null : <SortButtons field={value} />}
                  </th>
              })
              }
            </tr>
          </thead>

          <tbody>
            {schedules?.map((schedule, i) => {
              return <tr key={schedule.id} onClick={navigateToSchedule(schedule.id)}>
                <td>{i + 1}</td>
                <td>{schedule.name}</td>

                <td>{stations?.find((el) => {
                  return el.id === schedule.startStationId
                })?.name}</td>

                <td>{stations?.find((el) => {
                  return el.id === schedule.endStationId
                })?.name}</td>

                <td>{String(formatDate(schedule.dispatch))}</td>
                <td>{String(formatDate(schedule.arrival))}</td>
              </tr>
            })}
          </tbody>
      </table>
  )
}
