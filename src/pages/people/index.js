import styles from './people.module.css'

import { useCallback, useEffect, useState } from 'react'

import { getApiResource } from '../../utils/network'
import { PEOPLE_API } from '../../constants/api'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'

import { PeopleList } from '../../components/people-list'

export const People = () => {
  const [ people, setPeople ] = useState(null)

  const getResource = useCallback(async (url) => {
    const { results } = await getApiResource(url)

    const peopleList = results.map(({ name, url }) => {
      const id = getPeopleId(url)

      const img = getPeopleImg(id)

      return { name, id, img }
    })

    setPeople(peopleList)
  }, [ people ])

  useEffect(() => {
    getResource(PEOPLE_API)
  }, [])

  return (
    <div className={styles.PeoplePage}>
      <PeopleList people={ people }/>
    </div>
  )
}
