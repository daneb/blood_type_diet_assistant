import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import { render } from 'react-dom'
import Landing from './jsx/Landing'
import Result from './jsx/Results'

render((  
  <Router history={hashHistory}>
    <Route path="/" component={Landing} />
    <Route path="/result" component={Result} />
  </Router>), 
document.getElementById('content'))

// 
// render(
//     <TypeSelection data_url={dataUrl}/>,
//   document.getElementById('content')
// )

