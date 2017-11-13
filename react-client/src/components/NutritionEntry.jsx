import React from 'react';

class NutritionEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nutrientAmount = this.props.facts[this.props.nutrient];
    let age = this.props.age;
    let dri = this.props['dri' + age];

    return (
      <tr>
        <td>{this.props.nutrient}</td>
        <td>{nutrientAmount} {this.props.measure}</td>
        <td>{dri} {this.props.measure}</td>
      </tr>
    )
  }
}

// {nutrient, measure, facts, driTeen, driChild, driAdult}

export default NutritionEntry;

