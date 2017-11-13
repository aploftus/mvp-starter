import React from 'react';
import NutritionEntry from './NutritionEntry.jsx';

const NutritionInfo = ({nutrients, measures, facts, driAdult, driTeen, driChild}) => (
  <div className="nutrition-info">
    <h4>Facts about {facts.name}</h4>
    <img className="food-thumb" src={facts.img} />
    <div className="food-table">
      <table>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount in serving of {facts.name}</th>
            <th>Recommended Daily Intake for Children</th>
            <th>Recommended Daily Intake for Teens</th>
            <th>Recommended Daily Intake for Adults</th>
          </tr>
        </thead>
        <tbody>
          { nutrients.map((nutrient, index) => { 
            return <NutritionEntry 
              nutrient={nutrient}
              key={index} 
              measure={measures[index]}
              facts={facts}
              driChild={driChild[index]}
              driAdult={driAdult[index]}
              driTeen={driTeen[index]}
            /> })
          }
        </tbody>
      </table>
    </div>
  </div>
)

export default NutritionInfo;


// <img className="food-thumb" src={facts.photo.highres} />