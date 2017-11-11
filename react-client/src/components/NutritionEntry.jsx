import React from 'react';

let NutritionEntry = ({nutrient, nutrientCode, measure, facts}) => (
  <tr>
    <td>{nutrient}</td>
    <td>{facts[nutrientCode].value} {measure}</td>
  </tr>
)

export default NutritionEntry;

