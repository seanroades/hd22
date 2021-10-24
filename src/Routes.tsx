import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import ImportRepo from  './Components/Pages/ImportRepo'
import Plagarism from './Components/Pages/Plagarism'
import BaseNav from './Components/Pages/BaseNav'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [URLs, setURLs] = useState(["https://api.github.com/repos/seanroades/pyramid/commits", "https://api.github.com/repos/seanroades/pyramid/commits"]);
  const [URLsRaw, setURLsRaw] = useState("Enter your URLs here, one line for each...")

  async function getData() {
    for (let i = 0; i < URLs.length; i++) {
      fetch(URLs[i]).then((response) => {
        return response.json();
      })
      .then((json) => {
        setData((data: any) => [...data, json])
      });
    }
    console.log("data here: ", data)
  }

  function getLinks() {
    // get links here
  }

  function handleChange(e: any) {
    setURLsRaw(e.target.value)
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/import_repo" exact render={() => <ImportRepo getData={getData} val={URLsRaw} onChange={handleChange}/>}></Route>
        <Route path="/plagarism" exact render={() => <BaseNav><Plagarism /></BaseNav>}></Route>
        <Route path="/settings" exact render={() => <BaseNav><Settings /></BaseNav>}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
