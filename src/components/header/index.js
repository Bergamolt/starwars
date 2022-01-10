import styles from './styles.module.css'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={ styles.Header }>
      <ul className={ styles.Header__list }>
        <li><NavLink to="/" exact={ `${ true }` }>Home</NavLink></li>
        <li><NavLink to="/people/?page=1">People</NavLink></li>
      </ul>
    </div>
  )
}
