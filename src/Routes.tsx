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
  const [projects, setProjects] = useState<any>([])

  async function getData() {
    // Convert time
    setProjects([])
    const timestamp = currTime.getTime() / 1000
    console.log("TIMESTAMP", timestamp);
    var input = URLsRaw.split("\n")
    setURLs(input);
    console.log("INPUT", input)
    for (let i = 0; i < URLs.length; i++) {
      fetch(URLs[i]).then((response) => {
        return response.json();
      })
      .then((json) => {
        // setData((data: any) => [...data, json])
        setData([])
        console.log("JSON", json)
        let numCommits = json.length
        let testTime = json[numCommits -1].commit.committer.date
        let earliestTime = Date.parse(testTime) / 1000
        console.log("numCommits: ", numCommits, "earliestTime", earliestTime)
        console.log("earliestTime < timestamp:", earliestTime < timestamp, "earliestTime", earliestTime, "timestamp", timestamp)
        if (earliestTime < timestamp) {
          console.log("succeeded in catching cheater")
          setProjects((projects: any) => [...projects, [URLs[i], -1]]);
        }
        else if (numCommits <= 3) {
          setProjects((projects: any) => [...projects, [URLs[i], 0]]);
        }
        else {
          setProjects((projects: any) => [...projects, [URLs[i], 1]]);
        }
        console.log(projects)
      });
    }
    if ((data.length > 0) && (data[0] == "Awaiting Data......")) {
      alert("Failed to retrieve data from github. Please try again.")
      return -1
    }
    console.log("🎉DATA HERE: ", data)
    alert("🎉🎉🎉Date retrieved, check the plagarism report for more information!🎉🎉🎉")
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
