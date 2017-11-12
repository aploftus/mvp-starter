import React from 'react';
import NutritionEntry from './NutritionEntry.jsx';

const NutritionInfo = ({nutrients, nutrientCodes, measures, facts}) => (
  <div className="nutrition-info">
    <img className="food-thumb" src={facts.photo.thumb} />
    <div className="food-table">
      <table>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount in serving of {facts.food_name}</th>
          </tr>
        </thead>
        <tbody>
          { nutrients.map((nutrient, index) => { 
            return <NutritionEntry 
              nutrient={nutrient}
              key={index} 
              nutrientCode={nutrientCodes[index]}
              measure={measures[index]}
              facts={facts.full_nutrients}
            /> })
          }
        </tbody>
      </table>
    </div>
  </div>
)

export default NutritionInfo;


// <img className="food-thumb" src={facts.photo.highres} />