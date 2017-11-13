import React from 'react';

let FoodEntry = ({food, selectFood}) => (
  <div onClick={ () => selectFood(food) } >
    <div>{ food.name }</div>
    <img src={food.img} />
  </div>
)

export default FoodEntry;