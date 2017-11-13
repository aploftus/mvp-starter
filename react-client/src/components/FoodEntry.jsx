import React from 'react';

let FoodEntry = ({food, selectFood}) => (
  <span className="food-entry" onClick={ () => selectFood(food) } >
    <div>{ food.name }</div>
    <img src={food.img} />
  </span>
)

export default FoodEntry;