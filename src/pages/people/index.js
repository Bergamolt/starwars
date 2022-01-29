import styles from './styles.module.css'

import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useQueryParams } from 'hooks/use-query-params'
import { WithErrorApi } from 'hoc-helpers/with-error-api'
import { getApiResource } from 'utils/network'
import { PEOPLE_API } from 'constants/api'
import { getPeopleId, getPeopleImg, getPeoplePageId } from 'services/getPeopleData'

import { PeopleList } from 'components/people-list'
import { Navigation } from 'components/navigation'
import { Loader } from 'components/ui-kit/loader'

const People = ({ setError }) => {
  const [ people, setPeople ] = useState(null)
  const [ counterPage, setCounterPage ] = useState(null)
  const [ prevPage, setPrevPage ] = useState(null)
  const [ nextPage, setNextPage ] = useState(null)

  const query = useQueryParams()
  const queryPage = query.get('page')

  let cleanFunc = false

  const getResource = useCallback(async (url) => {
    const { results, next, previous } = await getApiResource(url)

    if (results) {
      const peopleList = results.map(({ name, url }) => {
        const id = getPeopleId(url)

        const img = getPeopleImg(id)

        return { name, id, img }
      })

      if (!cleanFunc) {
        setPeople(peopleList)
        setCounterPage(getPeoplePageId(url))
        setPrevPage(previous)
        setNextPage(next)
        setError(false)
      }
    } else {
      if (!cleanFunc) {
        setError(true)
      }
    }
  }, [ setError ])

  useEffect(() => {
    const fetchData = async () => await getResource(PEOPLE_API + queryPage)

    fetchData()

    return () => {
      cleanFunc = true
    }
  }, [])

  return (
    <div className={ styles.PeoplePage }>
      <Navigation
        counterPage={ counterPage }
        prevPage={ prevPage }
        nextPage={ nextPage }
        getResource={ getResource }
      />
      {
        people
          ? <PeopleList people={ people }/>
          : <Loader/>
      }
    </div>
  )
}

People.propTypes = {
  setError: PropTypes.func
}

export default WithErrorApi(People)

