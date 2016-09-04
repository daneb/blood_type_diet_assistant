import React from 'react';
import ReactDOM from 'react-dom';

class TypeSelection extends React.Component {
  getInitialState() {
    return {
      username: '',
      lastGistUrl: ''
    };
  }
  componentDidMount() {
    this.getBloodTypes();
    this.setState({
      username: lastGist.owner.login,
      lastGistUrl: lastGist.html_url
    });
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello my name is ',
      this.props.name
    );
  }
  getBloodTypes() {
    var url = 'http://codedtrueapi.azurewebsites.net/api/bloodtypes';
    var bloodtypeHTML = bloodtype => `<option value="${ bloodtype.Id }">${ bloodtype.Types }</option>`;

    fetch(url, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      var start = '<select name="select">';
      var end = '</select>';
      var html = json.map(bloodtypeHTML).join('');
      var bloodtypeList = document.getElementById("bloodtype_list");
      bloodtypeList.innerHTML = start + html + end;
      new Notification(document.title, {
        body: 'Blood Types loaded!'
      });
    });
  }
}

ReactDOM.render(React.createElement(TypeSelection, {
  id: 'test',
  name: 'dane' }), document.getElementById('react-root'));