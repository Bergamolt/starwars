import styles from './styles.module.css'

import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.Header}>
      <ul className={styles.Header__list}>
        <li><NavLink to="/" exect>Home</NavLink></li>
        <li><NavLink to="/people/?page=1" exect>People</NavLink></li>
      </ul>
    </div>
  )
}
