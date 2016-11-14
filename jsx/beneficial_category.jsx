import React from 'react';
import Checkbox from './checkbox.jsx';

export default class BeneficialCategory extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return <div className='beneficials notification is-primary'> 
    <div className="columns"> 
       <div className="column"><label htmlFor="super">Super</label></div>
       <div className="column"><Checkbox defaultValue={"super"} onChange={this.props.handler}/></div>
    </div>
     <div className="columns"> 
       <div className="column"><label className="beneficial">Beneficial</label></div>
       <div className="column"><Checkbox defaultValue={"beneficial"} onChange={this.props.handler}/></div>
    </div>
     <div className="columns"> 
       <div className="column"><label className="irregular">Irregular</label></div>
       <div className="column"><Checkbox defaultValue={"irregular"} onChange={this.props.handler}/></div>
    </div>
     <div className="columns"> 
      <div className="column"><label className="avoid">Avoid</label></div>
       <div className="column"><Checkbox defaultValue={"avoid"} onChange={this.props.handler}/></div>
    </div>
   </div>
  }
}