import React from 'react';

class NutritionEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nutrientAmount = this.props.facts[this.props.nutrient];
    let age = this.props.age;
    let dri = this.props['dri' + age];
    let category;

    if (nutrientAmount / dri < 0.1) {
      category = "low-source";
    }
    if (nutrientAmount / dri >= 0.4) {
      category = "high-source";
    }

    return (
      <tr>
        <td>{this.props.nutrient}</td>
        <td className={category}>{nutrientAmount} {this.props.measure}</td>
        <td>{dri} {this.props.measure}</td>
      </tr>
    )
  }
}

// {nutrient, measure, facts, driTeen, driChild, driAdult}

export default NutritionEntry;

