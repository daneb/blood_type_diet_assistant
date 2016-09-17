import React from 'react';

export default class FoodCategory extends React.Component {
  render() {
   return <div className='fruits notification is-primary'>
      <div className="columns"> 
        <div className="column"><label htmlFor="meat">Meat</label></div>
        <div className="column"><input type="checkbox" data-id="meat" value="meat"/></div>
      </div>
      <div className="columns"> 
        <div className="column"><label className="fruit">Fruit</label></div>
        <div className="column"><input type="checkbox" data-id="fruit" value="fruit"/></div>
      </div>
      <div className="columns"> 
        <div className="column"><label className="vegetable">Vegetable</label></div>
        <div className="column"><input type="checkbox" data-id="vegetable" value="vegetable"/></div>
      </div>
      <div className="columns"> 
        <div className="column"><label className="eggs">Eggs and Dairy</label></div>
        <div className="column"><input type="checkbox" data-id="eggs" value="eggs"/></div>
      </div>
   </div>
  }
}