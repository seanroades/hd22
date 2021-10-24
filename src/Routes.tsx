import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import ImportRepo from  './Components/Pages/ImportRepo'
import Plagarism from './Components/Pages/Plagarism'
import BaseNav from './Components/Pages/BaseNav'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [URLs, setURLs] = useState(["https://api.github.com/repos/seanroades/pyramid/commits", "https://api.github.com/repos/seanroades/pyramid/commits"]);
  const [URLsRaw, setURLsRaw] = useState("Enter your URLs here, one line for each...")
  const [currTime, setTime] = useState("time exists")

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
    console.log("urls", URLsRaw)
  }

  function handleTimeChange(time: any) {
    console.log("E is here: ", time)
    setTime(time)
    console.log("currTime", currTime)
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact render={() => <ImportRepo getData={getData} val={URLsRaw} onChange={handleChange} currTime={currTime} onTimeChange={handleTimeChange}/>}></Route>
        <Route path="/plagarism" exact render={() => <BaseNav><Plagarism /></BaseNav>}></Route>
        <Route path="/settings" exact render={() => <BaseNav><Settings /></BaseNav>}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
