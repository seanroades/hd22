import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /* --STACK OVERVIEW PROPOSED-- 
  *We could literally make API calls in react and use a ton of memory locally, <- this could fail with large inputs but would be very very quick
  or we could use a hosted python script to process data, <- this one seems time consuming
  or we could use node.js/express to process the data <- good alternative to #2, but will be more time consuming compared to option 1
  */
  
  /* 
  GENERAL TODOS
  TODO set up page routing to Home, Loading, and ValCheck
  TODO create component for | button, taking in textProp |,
  | validityCard, taking in button, github links |,
  and | header, just origin text like at the top of figma, would
  smart to just render this with pages in the App.tsx file rather than needing
  individually put it in each page |
  TODO backend ping to github and algo for detecting cheating,
  something like x% is identical, based on the src file or smth
  TODO frontend from figma, loading animation last priority
  */
  return (
    <div className="App">
      { /* page routing goes here, routing to pages in pages, misc is for 
      other components like button and validitycards */ }
    </div>
  );
}

export default App;
