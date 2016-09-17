import React from 'react';
import BeneficialCategory from './beneficial_category.jsx';

export default class TypeSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      types: [],
      value: ''
    }
  }
  componentDidMount() {
    fetch(this.props.data_url, {
      method: 'get'
    }).then((response)=>response.json())
      .then((types)=>this.setState({types: types}))
  }
  onChange(event) {
    this.setState({value: event.target.value})
  }
  render() {
  return <div className="container">
    <h3>Please select a blood type:</h3>
    <select className='form-control' onChange={this.onChange} value={this.state.value}>
      {this.state.types.map((bloodtype, i)=>
        <option value={bloodtype.Id} key={i}>{bloodtype.Types}</option>
      )}
    </select>
    <br/>
    <BeneficialCategory/>
  </div>
  }
}

