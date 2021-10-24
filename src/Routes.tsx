import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ImportRepo from './Components/Pages/ImportRepo'
import Plagiarism from './Components/Pages/Plagiarism'
import BaseNav from './Components/Pages/BaseNav'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  const [data, setData] = useState<any>(["Awaiting Data......"]);
  const [URLs, setURLs] = useState(["https://api.github.com/repos/seanroades/pyramid/commits", "https://api.github.com/repos/seanroades/pyramid/commits"]);
  const [URLsRaw, setURLsRaw] = useState("Enter your URLs here, one line for each...")
  const [currTime, setTime] = useState(new Date(Date.UTC(2009, 1, 13, 23, 31, 30)))

  async function getData() {
    console.log("URLsRaw", URLsRaw)
    var input = URLsRaw.split("\n")
    setURLs(input);
    console.log("INPUT", input)
    for (let i = 0; i < URLs.length; i++) {
      fetch(URLs[i]).then((response) => {
        return response.json();
      })
      .then((json) => {
        setData((data: any) => [...data, json])
      });
    }
    console.log("data here: ", data)
    // if (data.length == 0) {
    //   return -1;
    // }
  }

  function getLinks() {
    // get links here
  }

  function handleChange(e: any) {
    setURLsRaw(e.target.value)
    console.log("urls", URLsRaw)
  }

  function handleTimeChange(time: Date) {
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
          <Plagiarism data={URLs} />
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
