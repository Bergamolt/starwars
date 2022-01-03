import styles from './styles.module.css'

import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { WithErrorApi } from 'hoc-helpers/with-error-api'
import { getApiResource } from 'utils/network'
import { PEOPLE_API } from 'constants/api'
import { getPeopleId, getPeopleImg } from 'services/getPeopleData'

import { PeopleList } from 'components/people-list'

const People = ({ setError }) => {
  const [ people, setPeople ] = useState(null)

  const getResource = useCallback(async (url) => {
    const { results } = await getApiResource(url)

    if (results) {
      const peopleList = results.map(({ name, url }) => {
        const id = getPeopleId(url)

        const img = getPeopleImg(id)

        return { name, id, img }
      })

      setPeople(peopleList)
      setError(false)
    } else {
      setError(true)
    }
  }, [ people, setError ])

  useEffect(() => {
    getResource(PEOPLE_API)
  }, [])

  return (
    <div className={ styles.PeoplePage }>
      <PeopleList people={ people }/>
    </div>
  )
}

People.propTypes = {
  setError: PropTypes.func
}

export default WithErrorApi(People)

