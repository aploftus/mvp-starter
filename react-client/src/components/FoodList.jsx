import React from 'react';
import FoodEntry from './FoodEntry.jsx';

const FoodList = ({foods}) => (
  <div>
    <h4> Project Component </h4>
    There are { foods.length } items.
    { foods.map((food, index) => { 
      return <FoodEntry 
        food={food}
        key={index} 
      /> })
    }
  </div>
)

export default FoodList;