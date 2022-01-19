import { REMOVE_FAVORITE_PERSON, SET_FAVORITE_PERSON } from '../constants'

export const setFavoritePerson = person => ({
  type: SET_FAVORITE_PERSON,
  payload: person
})

export const removeFavoritePerson = id => ({
  type: REMOVE_FAVORITE_PERSON,
  payload: id
})