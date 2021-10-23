import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import ImportRepo from  './Components/Pages/ImportRepo'
import Plagarism from './Components/Pages/Plagarism'
import Base from './Components/Pages/Base'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>

        <Route path="/import_repo" exact render={() => <Base><ImportRepo /></Base>}></Route>
        <Route path="/plagarism" exact render={() => <Base><Plagarism /></Base>}></Route>
        <Route path="/settings" exact render={() => <Base><Settings /></Base>}></Route>

      </Switch>
    </HashRouter>
  )
}

export default Routes
