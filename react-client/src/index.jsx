import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import Search from './components/Search.jsx';
import config from '../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [
        {
          name: 'broccoli',
          thumbnail: 'https://i5.walmartimages.ca/images/Large/950/304/6000016950304.jpg?odnBound=460'
        },
        {
          name: 'apple',
          thumbnail: 'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg'
        },
        {
          name: 'pasta',
          thumbnail: 'https://www.budgetbytes.com/wp-content/uploads/2017/06/Grilled-Vegetable-Pasta-Salad-H-380x380.jpg'
        }
      ],
      nutritionData: []
    };
  }

  componentDidMount() {
    console.log('mounted');
    // this.getProjects.call(this);
  }

  selectFood(food) {
    console.log('you selected ', food.name);
    this.getFoodFacts(food);
  }

  getFoodFacts(food) {
    console.log('getting food facts');

    // A unique identifier to represent the end-user who is accessing the Nutritionix API
    // If in development mode, set this to 0.
    // This is used for billing purposes to determine the number of active users your app has.
    // Please note, when authenticating with the API, you must send the 
    // x-app-id and x-app-key params as headers, and not as query string parameters.
    $.ajax({
      url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      method: 'POST',
      data: { "query": 'broccoli' },
      headers: {
        "x-app-id": config.APP_ID,
        "x-app-key": config.API_KEY,
        "x-remote-user-id": 0,
      },
      success: (data) => {
        console.log('client got data!')
        console.log(data);
        this.setState({
          nutritionData: data
        })
      },
      error: (err) => {
        console.log('err ', err);
      }
    });
  } 



  // getProjects() {
  //   $.ajax({
  //     url: '/projects', 
  //     success: (data) => {
  //       this.setState({
  //         projects: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h1>You Are What You Eat</h1>
      <h2>Search</h2>
      <Search />
      <h2>Food List</h2>
      <FoodList foods={this.state.foods} selectFood={this.selectFood.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));