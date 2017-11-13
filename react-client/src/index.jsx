import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import Search from './components/Search.jsx';
import AgeSelector from './components/AgeSelector.jsx';
import Intro from './components/Intro.jsx';
import NutritionInfo from './components/NutritionInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'broccoli',
      age: 'child',
      foods: [],
      nutritionData: { 
        _id: '5a08ad324ef8a69e9c47b100',
        name: 'bacon',
        calcium: 17.4915,
        iron: 12.765,
        vit_a: 0,
        vit_b_6: 0,
        vit_c: 0.3761,
        vit_d: 0.0035,
        vit_e: 0.0173,
        proteins: 12.1061,
        fats: 0.5865,
        sugars: 1.0557,
        img: 'https://d2xdmhkmkbyw75.cloudfront.net/11_thumb.png',
        __v: 0 
      },
      nutrients: [
        'Calcium',
        'Iron',
        'Vitamin A',
        'Vitamin B-6',
        'Vitamin C',
        'Vitamin D',
        'Vitamin E',
        'Proteins',
        'Fats',
        'Sugars'
      ],
      measures: [ 'mg', 'mg', 'IU', 'mg', 'mg', 'IU', 'mg', 'g', 'g', 'g' ],
      driChild: [1000, 10, 500, 0.8, 35, 600, 7, 19, 25, 45],
      driTeen: [1300, 13, 900, 1.2, 75, 600, 11, 40, 20, 45],
      driAdult: [1000, 13, 800, 1.3, 85, 600, 15, 50, 20, 45]
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.getMenu();
    this.getFoodFacts(this.state.query);
  }

  selectFood(food) {
    console.log('you selected ', food.name);
    this.getFoodFacts(food.name);
  }

  selectAge(age) {
    this.setState({
      age: age
    })
    console.log('the new age is ', this.state.age);
  }

  updateQuery(query) {
    this.setState({
      query: query
    })
  }

  handleSubmit(event) {
    console.log('i submitted!');
    this.getFoodFacts(this.state.query);
    event.preventDefault();
  }

  getFoodFacts(food) {
    console.log('getting food facts');
    if (food) {
      $.ajax({
        url: '/food',
        method: 'POST',
        data: JSON.stringify({ query: food }),
        contentType: 'application/json',
        success: (foodData) => {
          console.log('client posted foodData!')
          console.log(foodData);
          this.setState({
            nutritionData: foodData
          })
        },
        error: (err) => {
          console.log('err ', err);
        }
      })
    }
  }

  getMenu() {
    console.log('getting menu');
    $.ajax({
      url: '/food',
      method: 'GET',
      contentType: 'application/json',
      success: (menu) => {
        console.log('client got data!')
        console.log(menu);
        this.setState({
          foods: menu
        })
      },
      error: (err) => {
        console.log('err ', err);
      }
    })
  }

  render () {
    return (<div className="container">
      <h1 className="heading">You Are What You Eat</h1>
      <Intro />
      <Search
        updateQuery={this.updateQuery.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)} 
      />
      <AgeSelector age={this.state.age} selectAge={this.selectAge.bind(this)}/>
      <NutritionInfo
        nutrients={this.state.nutrients}
        measures={this.state.measures}
        facts={this.state.nutritionData}
        driAdult={this.state.driAdult}
        driTeen={this.state.driTeen}
        driChild={this.state.driChild}
      />
      <h2>Food List</h2>
      <FoodList 
        foods={this.state.foods}
        selectFood={this.selectFood.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));