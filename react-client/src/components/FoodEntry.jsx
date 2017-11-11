import React from 'react';

let FoodEntry = ({food}) => (
  <div>
    <div>{ food.name }</div>
    <img className="thumbnail" src="{food.thumbnail}" />
  </div>
)

export default FoodEntry;