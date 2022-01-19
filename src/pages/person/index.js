import styles from './styles.module.css'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { WithErrorApi } from 'hoc-helpers/with-error-api'
import { getApiResource, makeConcurrentRequest } from 'utils/network'
import { PERSON_API } from 'constants/api'
import { getPeopleImg } from 'services/getPeopleData'

import { GoBack } from 'components/go-back'
import { PersonPhoto } from 'components/person-photo'
import { PersonInfo } from 'components/person-info'
import { PersonFilms } from 'components/person-films'

const Person = ({ setError }) => {
  const [ personInfo, setPersonInfo ] = useState(null)
  const [ personFilms, setPersonFilms ] = useState(null)
  const [ personName, setPersonName ] = useState(null)
  const [ personPhoto, setPersonPhoto ] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const res = await getApiResource(PERSON_API + id)

      if (res) {
        setPersonInfo([
          { title: 'Height', value: res.height },
          { title: 'Hair Color', value: res.hair_color },
          { title: 'Skin Color', value: res.skin_color },
          { title: 'Birth Year:', value: res.birth_year },
          { title: 'Gender', value: res.gender },
        ])

        setPersonPhoto(getPeopleImg(id))
        setPersonName(res.name)

        const films = await makeConcurrentRequest(res.films)
        setPersonFilms(films)
      }

      setError(!res)
    })()
  }, [ setError, id ])

  return (
    <>
      <GoBack/>
      <div className={ styles.PersonPage__wrapper }>
        <span className={ styles.PersonPage__title }>{ personName }</span>
        <div className={ styles.PersonPage__container }>
          <PersonPhoto personId={id} personPhoto={ personPhoto } personName={ personName }/>
          <PersonInfo personInfo={ personInfo }/>
          <PersonFilms personFilms={ personFilms }/>
        </div>
      </div>
    </>
  )
}

Person.propTypes = {
  setError: PropTypes.func
}

export default WithErrorApi(Person)

