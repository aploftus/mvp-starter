import React from 'react';
import NutritionEntry from './NutritionEntry.jsx';

class NutritionInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nutrition-info">
        <h4>Facts about {this.props.facts.name}</h4>
        <img className="food-thumb" src={this.props.facts.img} />
        <div className="food-table">
          <table>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount in serving of {this.props.facts.name}</th>
                <th>Recommended Daily Intake for {this.props.age}</th>
              </tr>
            </thead>
            <tbody>
              { this.props.nutrients.map((nutrient, index) => { 
                return <NutritionEntry 
                  nutrient={nutrient}
                  key={index} 
                  measure={this.props.measures[index]}
                  facts={this.props.facts}
                  driChild={this.props.driChild[index]}
                  driAdult={this.props.driAdult[index]}
                  driTeen={this.props.driTeen[index]}
                  age={this.props.age}
                /> })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default NutritionInfo;


// <img className="food-thumb" src={facts.photo.highres} />