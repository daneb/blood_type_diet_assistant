import React from 'react';
import BeneficialCategory from './beneficial_category.jsx';
import FoodCategory from './food_category.jsx';
import SubmissionButton from './submission_button.jsx';

export default class TypeSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      types: [],
      type_value: '',
      food_categories: [],
      beneficials: [],
      checked_values: []
    }
  }
  componentDidMount() {
    fetch('http://codedtrueapi.azurewebsites.net/api/bloodtypes', {
      method: 'get'
    }).then((response)=>response.json())
      .then((types)=>this.setState({types: types}))
  }
  handleSubmit() {
    fetch('/result', {method: 'POST', body: JSON.stringify(this.state)})
      .then((response)=>{return response.json()})
      .then((data)=>{console.log('Submitted: ', data)})
  }
  onChange(syntheticEvent) {
    this.setState({type_value: syntheticEvent.target.value})
  }
  onCheckboxChange(syntheticEvent) {
    this.setState({checked_values: this.state.checked_values.concat(syntheticEvent.target.value)})
    console.log(this.state.checked_values)
  }
  render() {
  return <div className="container">    
    <div className="columns">
      <div className="column is-half is-offset-one-quarter notification is-info">
        <div className="columns">
          <div className="column is-half">
            <h3>Please select a blood type:</h3>
          </div>
          <div className="column is-half">
              <select className='form-control' onChange={this.onChange} value={this.state.value}>
                {this.state.types.map((bloodtype, i)=>
                  <option value={bloodtype.Id} key={i}>{bloodtype.Types}</option>
                )}
              </select>
          </div>
        </div>
      </div>
    </div>
    <form className="assistantForm" onSubmit={this.handleSubmit} >
    <div className="columns">
      <div className="column is-2"></div>
      <div className="column is-4"><BeneficialCategory onCheckboxChange={this.props.checked_values}/></div>
      <div className="column is-4"><FoodCategory onCheckBoxChange={this.props.checked_values}/></div>
      <div className="column is-2"></div>
    </div>
    <div className="columns">
      <div className="column is-2"></div>
      <div className="column is-2">
        <button type='submit' className='button is-danger'>Submit</button>
      </div>
    </div>
    </form>
  </div>
  }
}

