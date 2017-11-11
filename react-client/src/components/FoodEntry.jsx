import React from 'react';

let FoodEntry = ({food, selectFood}) => (
  <div onClick={ () => selectFood(food) } >
    <div>{ food.name }</div>
    <img src={food.thumbnail}
       style={{width: 100, height: 100}} />
  </div>
)

export default FoodEntry;