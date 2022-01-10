import styles from './styles.module.css'

import PropTypes from 'prop-types'

export const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div className={styles.PersonPhoto}>
      <img src={ personPhoto } alt={ personName } className={styles.PersonPhoto__img}/>
    </div>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string
}