import '../node_modules/bulma/css/bulma.css'
import './Landing.jsx'
import './beneficial_category.jsx'
import './food_category.jsx'
import './submission_button.jsx'
import './checkbox.jsx'
import './renders.jsx'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './Landing'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
  , document.getElementById('content'))



