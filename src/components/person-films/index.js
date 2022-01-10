import styles from './styles.module.css'

import { useMemo } from 'react'
import PropTypes from 'prop-types'

export const PersonFilms = ({ personFilms }) => {
  const films = useMemo(() => {
    if (!personFilms) {
      return
    }

    return personFilms
      .sort((a, b) => a.episode_id - b.episode_id)
      .map(({ title, episode_id }) => (
        <li key={ title } className={ styles.PersonFilms__item }>
          <span className={ styles.PersonFilms__episode }>Episode { episode_id }</span>
          <span className={ styles.PersonFilms__colon }> : </span>
          { title }
        </li>
      ))
  }, [ personFilms ])

  return (
    <div className={ styles.PersonFilms }>
      <ul className={ styles.PersonFilms__list }>
        { films }
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}