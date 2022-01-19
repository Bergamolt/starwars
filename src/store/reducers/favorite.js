import { REMOVE_FAVORITE_PERSON, SET_FAVORITE_PERSON } from '../constants'

const initialState = {}

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_PERSON:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_FAVORITE_PERSON:
      const newState = {}

      for (const id in state) {
        if (id !== action.payload) {
          newState[id] = state[id]
        }
      }

      return newState
    default:
      return state
  }
}