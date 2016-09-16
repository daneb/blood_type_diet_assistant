import React from 'react';

export default class TypeSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      types: [],
      data_url: 'http://codedtrueapi.azurewebsites.net/api/bloodtypes'
    }
  }
  componentDidMount() {
    fetch(this.state.data_url, {
      method: 'get'
    }).then((response)=>response.json())
      .then((types)=>this.setState({types: types}))
    console.log(this.state.types)
  }
render() {
  return <div className="container">
    <h3>Please select a blood type:</h3>
    <select className='form-control'>
      {this.state.types.map((bloodtype, i)=>
        <option value={bloodtype.Id} key={i}>{bloodtype.Types}</option>
      )}
    </select>
  </div>
  }
}

