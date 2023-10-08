import React from 'react'
import { Outlet } from 'react-router-dom'

import { Button } from '../button/button.component'
import { useLogOut } from '../../../shared/hooks'

import { mainContainerStyles } from './index.styles'

export const MainContainer: React.FC = () => {
  const { disabled, logOutHandler} = useLogOut()

  return (
    <div className={mainContainerStyles}>
      <section>
        <h1>Actual Schedules</h1>
        <p>
          On this page you can see the actual schedules of the transport.
          However, if on your first visit you may see the nothing,
          it means that you have <span>to add a new schedule</span>.
          You can do it by clicking on the button in bottom-right corner of the page.
        </p>
        <p>
          Also if you need <span> to edit or delete the schedule</span>, you can do it on this page.
          For this you need to click on the schedule and you will be redirected to the page with the schedule details.
        </p>
        <Button text='Log Out' onClick={logOutHandler} disabled={disabled}/>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  )
}
