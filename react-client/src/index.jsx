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
            "value": 11.7024
          },
          {
            "attr_id": 204,
            "value": 12.1061
          },
          {
            "attr_id": 205,
            "value": 0.5865
          },
          {
            "attr_id": 207,
            "value": 1.9458
          },
          {
            "attr_id": 208,
            "value": 161.46
          },
          {
            "attr_id": 221,
            "value": 0
          },
          {
            "attr_id": 255,
            "value": 8.1593
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
            "value": 675.51
          },
          {
            "attr_id": 269,
            "value": 0
          },
          {
            "attr_id": 291,
            "value": 0
          },
          {
            "attr_id": 301,
            "value": 3.795
          },
          {
            "attr_id": 303,
            "value": 0.3278
          },
          {
            "attr_id": 304,
            "value": 10.695
          },
          {
            "attr_id": 305,
            "value": 133.86
          },
          {
            "attr_id": 306,
            "value": 172.155
          },
          {
            "attr_id": 307,
            "value": 580.98
          },
          {
            "attr_id": 309,
            "value": 1.0557
          },
          {
            "attr_id": 312,
            "value": 0.0362
          },
          {
            "attr_id": 315,
            "value": 0.0076
          },
          {
            "attr_id": 317,
            "value": 17.4915
          },
          {
            "attr_id": 318,
            "value": 12.765
          },
          {
            "attr_id": 319,
            "value": 3.795
          },
          {
            "attr_id": 320,
            "value": 3.795
          },
          {
            "attr_id": 321,
            "value": 0
          },
          {
            "attr_id": 322,
            "value": 0
          },
          {
            "attr_id": 323,
            "value": 0.1449
          },
          {
            "attr_id": 324,
            "value": 5.865
          },
          {
            "attr_id": 326,
            "value": 0.138
          },
          {
            "attr_id": 328,
            "value": 0.138
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
            "value": 0
          },
          {
            "attr_id": 341,
            "value": 0.4037
          },
          {
            "attr_id": 342,
            "value": 0.1794
          },
          {
            "attr_id": 343,
            "value": 0
          },
          {
            "attr_id": 344,
            "value": 0.0173
          },
          {
            "attr_id": 345,
            "value": 0.0035
          },
          {
            "attr_id": 346,
            "value": 0.0173
          },
          {
            "attr_id": 347,
            "value": 0
          },
          {
            "attr_id": 401,
            "value": 0
          },
          {
            "attr_id": 404,
            "value": 0.1932
          },
          {
            "attr_id": 405,
            "value": 0.08
          },
          {
            "attr_id": 406,
            "value": 3.6077
          },
          {
            "attr_id": 410,
            "value": 0.3795
          },
          {
            "attr_id": 415,
            "value": 0.1846
          },
          {
            "attr_id": 417,
            "value": 0
          },
          {
            "attr_id": 418,
            "value": 0.3761
          },
          {
            "attr_id": 421,
            "value": 30.8775
          },
          {
            "attr_id": 430,
            "value": 0
          },
          {
            "attr_id": 431,
            "value": 0
          },
          {
            "attr_id": 432,
            "value": 0
          },
          {
            "attr_id": 435,
            "value": 0
          },
          {
            "attr_id": 454,
            "value": 2.7945
          },
          {
            "attr_id": 501,
            "value": 0.1404
          },
          {
            "attr_id": 502,
            "value": 0.5189
          },
          {
            "attr_id": 503,
            "value": 0.5586
          },
          {
            "attr_id": 504,
            "value": 0.9708
          },
          {
            "attr_id": 505,
            "value": 1.0492
          },
          {
            "attr_id": 506,
            "value": 0.3233
          },
          {
            "attr_id": 507,
            "value": 0.1328
          },
          {
            "attr_id": 508,
            "value": 0.4903
          },
          {
            "attr_id": 509,
            "value": 0.4675
          },
          {
            "attr_id": 510,
            "value": 0.5965
          },
          {
            "attr_id": 511,
            "value": 0.76
          },
          {
            "attr_id": 512,
            "value": 0.4799
          },
          {
            "attr_id": 513,
            "value": 0.6755
          },
          {
            "attr_id": 514,
            "value": 1.1033
          },
          {
            "attr_id": 515,
            "value": 1.8019
          },
          {
            "attr_id": 516,
            "value": 0.533
          },
          {
            "attr_id": 517,
            "value": 0.4768
          },
          {
            "attr_id": 518,
            "value": 0.4927
          },
          {
            "attr_id": 521,
            "value": 0.0411
          },
          {
            "attr_id": 601,
            "value": 34.155
          },
          {
            "attr_id": 605,
            "value": 0.0497
          },
          {
            "attr_id": 606,
            "value": 4.1276
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
            "value": 0.1522
          },
          {
            "attr_id": 613,
            "value": 2.6341
          },
          {
            "attr_id": 614,
            "value": 1.2693
          },
          {
            "attr_id": 615,
            "value": 0.0242
          },
          {
            "attr_id": 617,
            "value": 4.948
          },
          {
            "attr_id": 618,
            "value": 1.8378
          },
          {
            "attr_id": 619,
            "value": 0.079
          },
          {
            "attr_id": 620,
            "value": 0.058
          },
          {
            "attr_id": 621,
            "value": 0.0028
          },
          {
            "attr_id": 624,
            "value": 0.0048
          },
          {
            "attr_id": 625,
            "value": 0.0021
          },
          {
            "attr_id": 626,
            "value": 0.2684
          },
          {
            "attr_id": 627,
            "value": 0
          },
          {
            "attr_id": 628,
            "value": 0.1014
          },
          {
            "attr_id": 629,
            "value": 0.0014
          },
          {
            "attr_id": 630,
            "value": 0.0021
          },
          {
            "attr_id": 631,
            "value": 0.009
          },
          {
            "attr_id": 645,
            "value": 5.3579
          },
          {
            "attr_id": 646,
            "value": 2.1086
          },
          {
            "attr_id": 652,
            "value": 0.0062
          },
          {
            "attr_id": 653,
            "value": 0.0362
          },
          {
            "attr_id": 654,
            "value": 0.0007
          },
          {
            "attr_id": 662,
            "value": 0.0021
          },
          {
            "attr_id": 663,
            "value": 0.0359
          },
          {
            "attr_id": 664,
            "value": 0
          },
          {
            "attr_id": 670,
            "value": 0.0162
          },
          {
            "attr_id": 671,
            "value": 0
          },
          {
            "attr_id": 672,
            "value": 0.0773
          },
          {
            "attr_id": 673,
            "value": 0.2663
          },
          {
            "attr_id": 674,
            "value": 4.9118
          },
          {
            "attr_id": 675,
            "value": 1.8102
          },
          {
            "attr_id": 676,
            "value": 0.0021
          },
          {
            "attr_id": 685,
            "value": 0.0021
          },
          {
            "attr_id": 687,
            "value": 0.0362
          },
          {
            "attr_id": 689,
            "value": 0.0255
          },
          {
            "attr_id": 693,
            "value": 0.038
          },
          {
            "attr_id": 695,
            "value": 0.0114
          },
          {
            "attr_id": 697,
            "value": 0
          },
          {
            "attr_id": 851,
            "value": 0.0769
          },
          {
            "attr_id": 852,
            "value": 0.011
          },
          {
            "attr_id": 853,
            "value": 0.0145
          },
          {
            "attr_id": 858,
            "value": 0.0169
          }
        ],
        "photo": {
          "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/11_thumb.png",
          "highres": "https://d2xdmhkmkbyw75.cloudfront.net/11_highres.jpg",
          "is_user_uploaded": false
        },
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
    this.getFoodFacts(this.state.query);
  }

  // selectFood(food) {
  //   console.log('you selected ', food);
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