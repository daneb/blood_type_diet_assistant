import React from 'react';

export default class BeneficialCategory extends React.Component {
  render() {
   return <div className='beneficials'> 
    <label htmlFor="super">Super Beneficial</label><input type="checkbox" data-id="super" value="super"/><br/>
    <label className="beneficial">Beneficial</label><input type="checkbox" data-id="beneficial" value="beneficial"/><br/>
    <label className="irregular">Irregular</label><input type="checkbox" data-id="irregular" value="irregular"/><br/>
    <label className="avoid">Avoid</label><input type="checkbox" data-id="avoid" value="avoid"/><br/>
   </div>
  }
}