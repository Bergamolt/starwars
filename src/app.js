import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { routesConfig } from 'routes/routesConfig'
import { Header } from 'components/header'

const App = () => {
  return (<Router>
      <div className="App">
        <Header/>
        <Routes>
          {
            routesConfig.map((route, index) => (
              <Route key={ index } path={ route.path } element={ route.element } exact={ `${ route.exact }` }/>
            ))
          }
        </Routes>
      </div>
    </Router>
  )
}

export default App
