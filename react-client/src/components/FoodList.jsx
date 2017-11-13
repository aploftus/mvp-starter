import React from 'react';
import FoodEntry from './FoodEntry.jsx';

const FoodList = ({foods, selectFood}) => (
  <div>
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