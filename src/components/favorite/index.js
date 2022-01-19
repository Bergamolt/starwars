import styles from './styles.module.css'

import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getFavoriteCounter } from 'store/reducers'

import { ReactComponent as FavoriteSvg } from './img/bookmark.svg'

export const Favorite = () => {
  const counter = useSelector(getFavoriteCounter)

  return (
    <NavLink to="/favorite" exact={ `${ true }` } className={ styles.Favorite }>
      <FavoriteSvg className={ styles.Favorite__img }/>
      <span className={ styles.Favorite__badge }>{counter}</span>
    </NavLink>
  )
}

Favorite.propTypes = {}
