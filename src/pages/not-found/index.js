import styles from './styles.module.css'

import img from './img/not-found.png'

import { useLocation } from 'react-router'

export const NotFound = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.NotFound}>
      <img src={ img } alt="Not Found"/>
      <span className={styles.NotFound__text}>No match for <u>{ pathname }</u></span>
    </div>
  )
}
