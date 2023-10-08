import React from 'react'

import { usePagination } from '../../../shared/hooks'
import { Button } from '../../../shared/components'

import { paginationButtonStyles, paginationStyles } from '../index.styles'

export const Pagination: React.FC = () => {
  const {backDisabled, backHandler, nextHandler, choosePageHandler, nextDisabled, totalPages, currentPage}
  = usePagination()

  return (
    <div className={paginationStyles}>
      <Button disabled={backDisabled} onClick={backHandler} type='button' text='<' />

      <div>
        {[...Array(totalPages)].map((_, i) => {
          return <Button
            key={i}
            onClick={() => {
              choosePageHandler(i + 1)
            }}
            type='button'
            text={String(i + 1)}
            customStyles={paginationButtonStyles(i + 1 === currentPage)}
          />
        })}
      </div>

      <Button disabled={nextDisabled} onClick={nextHandler} type='button' text='>' />
    </div>
  )
}
