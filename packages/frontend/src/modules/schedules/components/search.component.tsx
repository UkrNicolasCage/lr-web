import React from 'react'

import { FormInput } from '../../../shared/components'
import { useSearch } from '../../../shared/hooks/use-search.hook'

import { searchStyles } from '../index.styles'

export const Search: React.FC = () => {
  const { searchHandler } = useSearch();

  return (
    <FormInput
    name='search'
    placeholder='Search'
    withoutLabel
    customStyles={searchStyles}
    onChange={searchHandler}/>
  )
}
