import React from 'react';
import FoodEntry from './FoodEntry.jsx';

const FoodList = ({foods, selectFood}) => (
  <div>
    <h4> Food List Component </h4>
    There are { foods.length } items.
    { foods.map((food, index) => { 
      return <FoodEntry 
        food={food}
        key={index} 
        selectFood={selectFood}
      /> })
    }
  </div>
)

export default FoodList;