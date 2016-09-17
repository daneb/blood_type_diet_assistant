import React from 'react';

export default class BeneficialCategory extends React.Component {
  render() {
   return <div className='beneficials notification is-primary'> 
    <div className="columns"> 
       <div className="column"><label htmlFor="super">Super</label></div>
       <div className="column"> <input type="checkbox" data-id="super" value="super"/></div>
    </div>
     <div className="columns"> 
       <div className="column"> <label className="beneficial">Beneficial</label></div>
       <div className="column"> <input type="checkbox" data-id="beneficial" value="beneficial"/></div>
    </div>
     <div className="columns"> 
       <div className="column"> <label className="irregular">Irregular</label></div>
       <div className="column"> <input type="checkbox" data-id="irregular" value="irregular"/></div>
    </div>
     <div className="columns"> 
      <div className="column">  <label className="avoid">Avoid</label></div>
       <div className="column"> <input type="checkbox" data-id="avoid" value="avoid"/></div>
    </div>
   </div>
  }
}