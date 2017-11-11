import React from 'react';

let FoodEntry = ({food}) => (
  <div>
    <div>{ food.name }</div>
    <img src={food.thumbnail}
       style={{width: 100, height: 100}} />
  </div>
)

export default FoodEntry;