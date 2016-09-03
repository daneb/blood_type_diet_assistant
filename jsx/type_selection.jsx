import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello my name is {this.props.name}</h1>
  }
}

ReactDOM.render(
  <HelloWorld
  id='test'
  name='dane'/>,
document.getElementById('react-root')
)
