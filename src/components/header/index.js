import styles from './styles.module.css'
import neutral from './img/droid.svg'
import dark from './img/space-station.svg'
import light from './img/lightsaber.svg'

import { NavLink } from 'react-router-dom'

import { Favorite } from 'components/favorite'
import { useTheme } from '../../context/ThemeContext'

const logo = { dark, neutral, light }

export const Header = () => {
  const { theme } = useTheme()

  return (
    <div className={ styles.Header }>
      <NavLink to="/">
        <img src={ logo[theme] } alt="" className={ styles.Logo }/>
      </NavLink>
      <ul className={ styles.Header__list }>
        <li><NavLink to="/" exact={ `${ true }` }>Home</NavLink></li>
        <li><NavLink to="/people/?page=1">People</NavLink></li>
        <li><NavLink to="/search">Search</NavLink></li>
      </ul>
      <Favorite/>
    </div>
  )
}
