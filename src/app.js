import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { routesConfig } from 'routes/routesConfig'

const App = () => (
  <Router>
    <NavLink to="/" exect>Home</NavLink>
    <NavLink to="/people" exect>People</NavLink>
    <Routes>
      {
        routesConfig.map((route, index) => (
          <Route key={ index } path={ route.path } element={ route.element } exect={ route.exect }/>
        ))
      }
    </Routes>
  </Router>
)

export default App
