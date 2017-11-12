import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import Search from './components/Search.jsx';
import Intro from './components/Intro.jsx';
import NutritionInfo from './components/NutritionInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'bacon',
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
      nutritionData: {
        food_name: 'cherries',
        "full_nutrients": [
          {
            "attr_id": 203,
            "value": 0.0869
          },
          {
            "attr_id": 204,
            "value": 0.0164
          },
          {
            "attr_id": 205,
            "value": 1.3128
          },
          {
            "attr_id": 207,
            "value": 0.0394
          },
          {
            "attr_id": 208,
            "value": 5.166
          },
          {
            "attr_id": 209,
            "value": 0
          },
          {
            "attr_id": 210,
            "value": 0.0123
          },
          {
            "attr_id": 211,
            "value": 0.5404
          },
          {
            "attr_id": 212,
            "value": 0.4403
          },
          {
            "attr_id": 213,
            "value": 0
          },
          {
            "attr_id": 214,
            "value": 0.0098
          },
          {
            "attr_id": 221,
            "value": 0
          },
          {
            "attr_id": 255,
            "value": 6.7445
          },
          {
            "attr_id": 262,
            "value": 0
          },
          {
            "attr_id": 263,
            "value": 0
          },
          {
            "attr_id": 268,
            "value": 21.566
          },
          {
            "attr_id": 269,
            "value": 1.0512
          },
          {
            "attr_id": 287,
            "value": 0.0484
          },
          {
            "attr_id": 291,
            "value": 0.1722
          },
          {
            "attr_id": 301,
            "value": 1.066
          },
          {
            "attr_id": 303,
            "value": 0.0295
          },
          {
            "attr_id": 304,
            "value": 0.902
          },
          {
            "attr_id": 305,
            "value": 1.722
          },
          {
            "attr_id": 306,
            "value": 18.204
          },
          {
            "attr_id": 307,
            "value": 0
          },
          {
            "attr_id": 309,
            "value": 0.0057
          },
          {
            "attr_id": 312,
            "value": 0.0049
          },
          {
            "attr_id": 313,
            "value": 0.164
          },
          {
            "attr_id": 315,
            "value": 0.0057
          },
          {
            "attr_id": 317,
            "value": 0
          },
          {
            "attr_id": 318,
            "value": 5.248
          },
          {
            "attr_id": 319,
            "value": 0
          },
          {
            "attr_id": 320,
            "value": 0.246
          },
          {
            "attr_id": 321,
            "value": 3.116
          },
          {
            "attr_id": 322,
            "value": 0
          },
          {
            "attr_id": 323,
            "value": 0.0057
          },
          {
            "attr_id": 324,
            "value": 0
          },
          {
            "attr_id": 328,
            "value": 0
          },
          {
            "attr_id": 334,
            "value": 0
          },
          {
            "attr_id": 337,
            "value": 0
          },
          {
            "attr_id": 338,
            "value": 6.97
          },
          {
            "attr_id": 341,
            "value": 0.0008
          },
          {
            "attr_id": 342,
            "value": 0.0033
          },
          {
            "attr_id": 343,
            "value": 0
          },
          {
            "attr_id": 344,
            "value": 0.0025
          },
          {
            "attr_id": 345,
            "value": 0
          },
          {
            "attr_id": 346,
            "value": 0
          },
          {
            "attr_id": 347,
            "value": 0
          },
          {
            "attr_id": 401,
            "value": 0.574
          },
          {
            "attr_id": 404,
            "value": 0.0022
          },
          {
            "attr_id": 405,
            "value": 0.0027
          },
          {
            "attr_id": 406,
            "value": 0.0126
          },
          {
            "attr_id": 410,
            "value": 0.0163
          },
          {
            "attr_id": 415,
            "value": 0.004
          },
          {
            "attr_id": 417,
            "value": 0.328
          },
          {
            "attr_id": 418,
            "value": 0
          },
          {
            "attr_id": 421,
            "value": 0.5002
          },
          {
            "attr_id": 429,
            "value": 0
          },
          {
            "attr_id": 430,
            "value": 0.1722
          },
          {
            "attr_id": 431,
            "value": 0
          },
          {
            "attr_id": 432,
            "value": 0.328
          },
          {
            "attr_id": 435,
            "value": 0.328
          },
          {
            "attr_id": 501,
            "value": 0.0007
          },
          {
            "attr_id": 502,
            "value": 0.0018
          },
          {
            "attr_id": 503,
            "value": 0.0016
          },
          {
            "attr_id": 504,
            "value": 0.0025
          },
          {
            "attr_id": 505,
            "value": 0.0026
          },
          {
            "attr_id": 506,
            "value": 0.0008
          },
          {
            "attr_id": 507,
            "value": 0.0008
          },
          {
            "attr_id": 508,
            "value": 0.002
          },
          {
            "attr_id": 509,
            "value": 0.0012
          },
          {
            "attr_id": 510,
            "value": 0.002
          },
          {
            "attr_id": 511,
            "value": 0.0015
          },
          {
            "attr_id": 512,
            "value": 0.0012
          },
          {
            "attr_id": 513,
            "value": 0.0021
          },
          {
            "attr_id": 514,
            "value": 0.0467
          },
          {
            "attr_id": 515,
            "value": 0.0068
          },
          {
            "attr_id": 516,
            "value": 0.0019
          },
          {
            "attr_id": 517,
            "value": 0.0032
          },
          {
            "attr_id": 518,
            "value": 0.0025
          },
          {
            "attr_id": 601,
            "value": 0
          },
          {
            "attr_id": 605,
            "value": 0
          },
          {
            "attr_id": 606,
            "value": 0.0031
          },
          {
            "attr_id": 607,
            "value": 0
          },
          {
            "attr_id": 608,
            "value": 0
          },
          {
            "attr_id": 609,
            "value": 0
          },
          {
            "attr_id": 610,
            "value": 0
          },
          {
            "attr_id": 611,
            "value": 0
          },
          {
            "attr_id": 612,
            "value": 0.0001
          },
          {
            "attr_id": 613,
            "value": 0.0022
          },
          {
            "attr_id": 614,
            "value": 0.0007
          },
          {
            "attr_id": 617,
            "value": 0.0039
          },
          {
            "attr_id": 618,
            "value": 0.0022
          },
          {
            "attr_id": 619,
            "value": 0.0021
          },
          {
            "attr_id": 620,
            "value": 0
          },
          {
            "attr_id": 621,
            "value": 0
          },
          {
            "attr_id": 626,
            "value": 0.0001
          },
          {
            "attr_id": 627,
            "value": 0
          },
          {
            "attr_id": 628,
            "value": 0
          },
          {
            "attr_id": 629,
            "value": 0
          },
          {
            "attr_id": 630,
            "value": 0
          },
          {
            "attr_id": 631,
            "value": 0
          },
          {
            "attr_id": 636,
            "value": 0.984
          },
          {
            "attr_id": 645,
            "value": 0.0039
          },
          {
            "attr_id": 646,
            "value": 0.0043
          }
        ],
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
      nutrientCodes: [ 21, 22, 32, 53, 48, 38, 37, 1, 2, 18 ],
      measures: [ 'mg', 'mg', 'IU', 'mg', 'mg', 'IU', 'mg', 'g', 'g', 'g' ]
    };
  }

  componentDidMount() {
    console.log('mounted');
    // this.getProjects.call(this);
    this.getFoodFacts('bacon');
    console.log(this.state.nutritionData.food_name);
  }

  // selectFood(food) {
  //   console.log('you selected ', food.name);
  //   this.getFoodFacts(food);
  // }

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
        success: (data) => {
          console.log('client got data!')
          this.setState({
            nutritionData: JSON.parse(data).foods[0]
          })
        },
        error: (err) => {
          console.log('err ', err);
        }
      })
    }
  } 

  render () {
    return (<div className="container">
      <h1 className="heading">You Are What You Eat</h1>
      <Intro />
      <Search
        updateQuery={this.updateQuery.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)} 
      />
      <h4>Results for: {this.state.query}</h4>
      <NutritionInfo
        nutrients={this.state.nutrients}
        nutrientCodes={this.state.nutrientCodes}
        measures={this.state.measures}
        facts={this.state.nutritionData}
      />
      <h2>Food List</h2>
      <FoodList foods={this.state.foods}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));