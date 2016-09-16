import React from 'react';
import ReactDOM from 'react-dom';
import TypeSelection from './type_selection.jsx';

let dataUrl = 'http://codedtrueapi.azurewebsites.net/api/bloodtypes'
ReactDOM.render(
    <TypeSelection data_url={dataUrl}/>,
  document.getElementById('content')
)