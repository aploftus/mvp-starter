import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import Search from './components/Search.jsx';

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
      ]
    };
  }

  componentDidMount() {
    console.log('mounted');
    // this.getProjects.call(this);
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
      <FoodList foods={this.state.foods}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));