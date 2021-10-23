import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import ImportRepo from  './Components/Pages/ImportRepo'
import Plagarism from './Components/Pages/Plagarism'
import BaseNav from './Components/Pages/BaseNav'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/import_repo" exact render={() => <BaseNav><ImportRepo /></BaseNav>}></Route>
        <Route path="/plagarism" exact render={() => <BaseNav><Plagarism /></BaseNav>}></Route>
        <Route path="/settings" exact render={() => <BaseNav><Settings /></BaseNav>}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
