import styles from './styles.module.css'

import img from './img/not-found.png'

import { useLocation, Link } from 'react-router-dom'

export const NotFound = () => {
  const { pathname } = useLocation()

  return (
    <div className={ styles.NotFound }>
      <img src={ img } alt="Not Found"/>
      <p className={ styles.NotFound__text }>No match for <u>{ pathname }</u></p>
      <Link to="/">
        <span className={ styles.NotFound__text }>Go home</span>
      </Link>
    </div>
  )
}
