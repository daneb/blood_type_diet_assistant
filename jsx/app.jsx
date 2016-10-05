import '../node_modules/bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
import TypeSelection from './mainform.jsx';

import './beneficial_category.jsx'
import './food_category.jsx'
import './submission_button.jsx'
import './checkbox.jsx'
import './mainform.jsx'

let dataUrl = 'http://codedtrueapi.azurewebsites.net/api/bloodtypes'
render(
    <TypeSelection data_url={dataUrl}/>,
  document.getElementById('content')
)

