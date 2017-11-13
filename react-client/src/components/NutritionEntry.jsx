import React from 'react';

let NutritionEntry = ({nutrient, measure, facts, driTeen, driChild, driAdult}) => (
  <tr>
    <td>{nutrient}</td>
    <td>{facts[nutrient]} {measure}</td>
    <td>{driChild} {measure}</td>
    <td>{driTeen} {measure}</td>
    <td>{driAdult} {measure}</td>
  </tr>
)

export default NutritionEntry;

