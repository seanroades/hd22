import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ImportRepo from './Components/Pages/ImportRepo'
import Plagiarism from './Components/Pages/Plagiarism'
import BaseNav from './Components/Pages/BaseNav'
import Settings from './Components/Pages/Settings'

const Routes: React.FC = () => {
  const [data, setData] = useState([])

  async function getData() {
    const testURL = 'https://api.github.com/repos/seanroades/pyramid/commits'
    // console.log("Function get data")
    // try {
    //     const response = await fetch(testURL);
    //     setData(await response.json());
    //     console.log("DATA: ", data);
    // } catch (error) {
    //     console.log('error', error);
    // }
    fetch(testURL)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log('JSON', json)
        setData(json)
      })
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <BaseNav />
          <ImportRepo getData={getData} />
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
