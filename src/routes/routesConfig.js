import People from 'pages/people'
import { Home } from 'pages/home'
import { NotFound } from 'pages/not-found'

export const routesConfig = [
  {
    path: '/',
    exect: true,
    element: <Home/>
  },
  {
    path: '/people',
    exect: true,
    element: <People/>
  },
  {
    path: '*',
    exect: false,
    element: <NotFound/>
  }
]