import People from 'pages/people'
import { Home } from 'pages/home'

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
  }
]