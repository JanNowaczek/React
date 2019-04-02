import React from 'react'
import{ BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calculators from './Views/Calculators'
import Home from './Views/Home'


const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
        </ul>
        <ul>
          <li>
            <link to="/calculators"> components={Calculators}</link>
          </li>
        </ul>
      </div>
      <Route exact={true} path={"/"} component={Home} />
      <Route path={"/calculators"} component={Calculators} />
    </Router>
  )
}

export default App