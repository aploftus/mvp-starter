import React from 'react';

class NutritionEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nutrientAmount = this.props.facts[this.props.nutrient];

    return (
      <tr>
        <td>{this.props.nutrient}</td>
        <td>{nutrientAmount} {this.props.measure}</td>
        <td>{this.props.driChild} {this.props.measure}</td>
        <td>{this.props.driTeen} {this.props.measure}</td>
        <td>{this.props.driAdult} {this.props.measure}</td>
      </tr>
    )
  }
}

// let NutritionEntry = (props) => (
//   <tr>
//     <td>{props.nutrient}</td>
//     <td>{props.facts[props.nutrient]} {props.measure}</td>
//     <td>{props.driChild} {props.measure}</td>
//     <td>{props.driTeen} {props.measure}</td>
//     <td>{props.driAdult} {props.measure}</td>
//   </tr>
// )


// {nutrient, measure, facts, driTeen, driChild, driAdult}

export default NutritionEntry;

