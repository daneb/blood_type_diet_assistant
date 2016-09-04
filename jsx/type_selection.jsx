import React from 'react';
import ReactDOM from 'react-dom';

class TypeSelection extends React.Component {
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
    return <div>Hello my name is {this.props.name}</div>
 }
 getBloodTypes() {
   var bloodtypeHTML = (bloodtype)=> `<option value="${bloodtype.Id}">${bloodtype.Types}</option>`

   fetch(url, {
     method: 'get'
   }).then(function(response) {
     return response.json();
   }).then(function(json) {

     var start =  '<select name="select">'
     var end = '</select>'
     var html = json.map(bloodtypeHTML).join('');
     var bloodtypeList = document.getElementById("bloodtype_list");
     bloodtypeList.innerHTML = start + html + end;
     new Notification(document.title, {
       body: 'Blood Types loaded!'
     })
   })
 }
}

ReactDOM.render(
  <div className="container">
    <h3>Please select a blood type:</h3>
    <select class='form-control'>
      {this.state.types.map((bloodtype)=>
        <option value={bloodtype.Id}>{bloodtype.Types}</option>
      )}
    </select>
  </div>,
document.getElementById('react-root')
)
