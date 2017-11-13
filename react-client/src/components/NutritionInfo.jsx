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
                <th>Recommended Daily Intake for Children</th>
                <th>Recommended Daily Intake for Teens</th>
                <th>Recommended Daily Intake for Adults</th>
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
                /> })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
// const NutritionInfo = (props) => (
//   <div className="nutrition-info">
//     <h4>Facts about {props.facts.name}</h4>
//     <img className="food-thumb" src={props.facts.img} />
//     <div className="food-table">
//       <table>
//         <thead>
//           <tr>
//             <th>Nutrient</th>
//             <th>Amount in serving of {props.facts.name}</th>
//             <th>Recommended Daily Intake for Children</th>
//             <th>Recommended Daily Intake for Teens</th>
//             <th>Recommended Daily Intake for Adults</th>
//           </tr>
//         </thead>
//         <tbody>
//           { props.nutrients.map((nutrient, index) => { 
//             return <NutritionEntry 
//               nutrient={nutrient}
//               key={index} 
//               measure={props.measures[index]}
//               facts={props.facts}
//               driChild={props.driChild[index]}
//               driAdult={props.driAdult[index]}
//               driTeen={props.driTeen[index]}
//             /> })
//           }
//         </tbody>
//       </table>
//     </div>
//   </div>
// )

export default NutritionInfo;


// <img className="food-thumb" src={facts.photo.highres} />