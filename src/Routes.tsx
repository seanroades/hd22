import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import ImportRepo from  './Components/Pages/ImportRepo'
import Plagarism from './Components/Pages/Plagarism'
import Base from './Components/Pages/Base'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  const [data, setData] = useState([]);
  
  async function getData() {
    const testURL = 'https://api.github.com/repos/seanroades/pyramid/commits';
    void async function fetchData() {
        try {
            const response = await fetch(testURL);
            setData(await response.json());
            console.log("DATA: ", data);
        } catch (error) {
            console.log('error', error);
        }
    }
  }

  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/" exact render={() => <Home />}></Route> */}
        <Route path="/" exact render={() => <Base><ImportRepo getData={getData} /></Base>}></Route>

        <Route path="/import_repo" exact render={() => <Base><ImportRepo getData={getData} /></Base>}></Route>
        <Route path="/plagarism" exact render={() => <Base><Plagarism /></Base>}></Route>
        <Route path="/settings" exact render={() => <Base><Settings /></Base>}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
