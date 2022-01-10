import People from 'pages/people'
import Person from 'pages/person'
import { Home } from 'pages/home'
import { NotFound } from 'pages/not-found'

export const routesConfig = [
  {
    path: '/',
    exact: true,
    element: <Home/>
  },
  {
    path: '/people',
    exact: false,
    element: <People/>
  },
  {
    path: '/people/:id',
    exact: false,
    element: <Person/>
  },
  {
    path: '*',
    exact: false,
    element: <NotFound/>
  }
]