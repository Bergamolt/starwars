import { useEffect, useState } from 'react'

import { useDebounce } from 'hooks/use-debounce'
import { getApiResource } from 'utils/network'
import { SEARCH_API } from 'constants/api'
import { getPeopleId, getPeopleImg } from 'services/getPeopleData'

import { SearchList } from 'components/search-list'
import { TextField } from 'components/ui-kit/text-field'

const DELAY_DEBOUNCE = 500

export const Search = () => {
  const [ people, setPeople ] = useState(null)
  const [ value, setValue ] = useState('')

  const onChange = value => {
    setValue(value)
  }

  const debouncedValue = useDebounce(value, DELAY_DEBOUNCE)

  useEffect(() => {
    if (debouncedValue) {
      (async () => {
        const { results } = await getApiResource(SEARCH_API + value)

        const peopleList = results.map(({ url, name }) => {
          const id = getPeopleId(url)
          const img = getPeopleImg(id)

          return { id, name, img }
        })

        setPeople(peopleList)
      })()
    }
  }, [ debouncedValue ])

  return (
    <>
      <h1 className="Title">Search</h1>
      <TextField onChange={ onChange } value={ value }/>
      { people && <SearchList people={ people }/> }
    </>
  )
}