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