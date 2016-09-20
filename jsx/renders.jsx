import React from 'react';
import ReactDOM from 'react-dom';
import TypeSelection from './Landing.jsx';

let dataUrl = 'http://codedtrueapi.azurewebsites.net/api/bloodtypes'
ReactDOM.render(
    <TypeSelection data_url={dataUrl}/>,
  document.getElementById('content')
)