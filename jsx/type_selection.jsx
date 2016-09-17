import React from 'react';
import BeneficialCategory from './beneficial_category.jsx';
import FoodCategory from './food_category.jsx';

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
      <div className="column is-4"><BeneficialCategory/></div>
      <div className="column is-4"><FoodCategory/></div>
      <div className="column is-2"></div>
    </div>
  </div>
  }
}

