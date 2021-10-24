import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ImportRepo from './Components/Pages/ImportRepo'
import Plagiarism from './Components/Pages/Plagiarism'
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
    <Router>
      <Switch>
        <Route path="/" exact>
          <BaseNav />
          <ImportRepo getData={getData} val={URLsRaw} onChange={handleChange} currTime={currTime} onTimeChange={handleTimeChange}/>
        </Route>
        <Route path="/plagiarism" exact>
          <BaseNav />
          <Plagiarism />
        </Route>
        <Route path="/settings" exact>
          <BaseNav />
          <Settings />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
