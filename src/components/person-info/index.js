import styles from './styles.module.css'

import { useMemo } from 'react'
import PropTypes from 'prop-types'

export const PersonInfo = ({ personInfo }) => {
  const infoList = useMemo(() => {
    if (!personInfo) {
      return null
    }

    return personInfo.map(({ title, value }) => (
      <li key={ title } className={ styles.PersonInfo__item }>
        <span>{ title }</span>: { value }
      </li>
    ))
  }, [ personInfo ])

  return (
    <div className={ styles.PersonInfo }>
      <ul className={ styles.PersonInfo__list }>
        { infoList }
      </ul>
    </div>
  )
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array
}