import styles from './styles.module.css'

import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeFavoritePerson, setFavoritePerson } from 'store/actions'
import { getFavoriteState } from 'store/reducers'

import { ReactComponent as FavoriteSvg } from './img/favorite.svg'

const getFillColor = active => (active ? '#ff0' : '#fff')

export const PersonPhoto = ({ personPhoto, personName, personId }) => {
  const favorite = useSelector(getFavoriteState)
  const dispatch = useDispatch()

  const [ favoriteActive, setFavoriteActive ] = useState(false)

  const setFavorite = useCallback(() => {
    setFavoriteActive(true)

    dispatch(setFavoritePerson({
      [personId]: {
        name: personName,
        img: personPhoto
      }
    }))
  }, [ personId, personName, personPhoto ])

  const deleteFavorite = useCallback(() => {
    setFavoriteActive(false)

    dispatch(removeFavoritePerson(personId))
  }, [ favorite, personId, personName, personPhoto ])

  const handlerFavorite = () => {
    if (favoriteActive) {
      return deleteFavorite()
    }

    return setFavorite()
  }

  useEffect(() => {
    setFavoriteActive(!!favorite[personId])
  }, [ personId, personName, personPhoto ])

  return (
    <div className={ styles.PersonPhoto }>
      <img src={ personPhoto } alt={ personName } className={ styles.PersonPhoto__img }/>
      <FavoriteSvg
        fill={ getFillColor(favoriteActive) }
        onClick={ handlerFavorite }
        className={ styles.PersonPhoto__favorite }
      />
    </div>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string
}