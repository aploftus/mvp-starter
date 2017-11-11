import React from 'react';

const NutritionInfo = ({facts}) => (
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
      </tbody>
    </table>
  </div>
)

export default NutritionInfo;