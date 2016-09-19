import React from 'react';
import BeneficialCategory from './beneficial_category.jsx';
import FoodCategory from './food_category.jsx';
import SubmissionButton from './submission_button.jsx';

export default class TypeSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      types: [],
      type_value: '',
      food_categories: [],
      beneficials: []
    }
  }
  componentDidMount() {
    fetch(this.props.data_url, {
      method: 'get'
    }).then((response)=>response.json())
      .then((types)=>this.setState({types: types}))
  }
  onChange(syntheticEvent) {
    this.setState({type_value: syntheticEvent.target.value})
  }
  onCheckboxChange(syntheticEvent) {
    console.log("It worked!")
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
    <div className="columns">
      <div className="column is-2"></div>
      <div className="column is-4"><BeneficialCategory handler={this.onCheckboxChange} /></div>
      <div className="column is-4"><FoodCategory/></div>
      <div className="column is-2"></div>
    </div>
    <div className="columns">
      <div className="column is-2"></div>
      <div className="column is-2">
        <SubmissionButton/>
      </div>
    </div>
  </div>
  }
}

