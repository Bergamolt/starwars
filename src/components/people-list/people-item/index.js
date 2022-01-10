import styles from '../styles.module.css'

import { Link } from 'react-router-dom'

export const PeopleItem = ({ name, img, id }) => {
  return (
    <div className={ styles.PeopleItem }>
      <Link to={ id }>
        <img className={ styles.PeopleItem__image } src={ img } alt={ name }/>
        <span className={ styles.PeopleItem__title }>{ name }</span>
      </Link>
    </div>
  )
}
