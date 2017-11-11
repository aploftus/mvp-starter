import React from 'react';
import NutritionEntry from './NutritionEntry.jsx';

const NutritionInfo = ({nutrients, nutrientCodes, measures, facts}) => (
  <div>
    <h4> NutritionInfo Component </h4>
    <table>
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Amount in {facts.food_name}</th>
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
)

export default NutritionInfo;