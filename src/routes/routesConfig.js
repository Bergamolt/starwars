import People from 'pages/people'
import Person from 'pages/person'
import { Home } from 'pages/home'
import { NotFound } from 'pages/not-found'
import { Favorite } from 'pages/favorite'
import { Search } from 'pages/search'

export const routesConfig = [
  {
    path: '/',
    exact: true,
    element: <Home/>
  },
  {
    path: '/people',
    exact: true,
    element: <People/>
  },
  {
    path: '/people/:id',
    element: <Person/>
  },
  {
    path: '/favorite',
    exact: true,
    element: <Favorite/>
  },
  {
    path: '/search',
    exact: true,
    element: <Search/>
  },
  {
    path: '*',
    exact: false,
    element: <NotFound/>
  }
]