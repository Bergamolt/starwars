import { combineReducers } from 'redux'
import { favoriteReducer } from './favorite'

export const rootReducer = combineReducers({
  favorite: favoriteReducer
})

export const getFavoriteState = state => state.favorite

export const getFavoriteCounter = state => Object.keys(state.favorite).length