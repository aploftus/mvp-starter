import React from 'react';

let NutritionEntry = ({nutrient, measure, facts}) => (
  <tr>
    <td>{nutrient}</td>
    <td>{facts[nutrient]} {measure}</td>
  </tr>
)

export default NutritionEntry;

