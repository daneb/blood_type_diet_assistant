import React from 'react';
import Checkbox from './checkbox.jsx';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue,
      isChecked: false
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(syntheticEvent) {
    this.setState({isChecked: !this.state.isChecked }); 
  }
  render() {
    return <input type="checkbox" checked={this.state.isChecked} onChange={this.onChange} value={this.state.value} />
  }
}