import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getFavoriteState } from 'store/reducers'

import { PeopleList } from 'components/people-list'

export const Favorite = () => {
  const favorite = useSelector(getFavoriteState)

  const people = useMemo(() => Object.keys(favorite)
    .map(id => ({
      id,
      name: favorite[id].name,
      img: favorite[id].img
    })), [ favorite ])

  return (
    <div>
      <h1 className="Title">Favorites</h1>
      <PeopleList people={ people }/>
    </div>
  )
}