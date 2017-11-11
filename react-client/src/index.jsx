import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        {description: 'one'},
        {description: 'two'},
        {description: 'three'}
      ]
    };
  }

  componentDidMount() {
    console.log('mounted');
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <h1>Donors Choose Urgent Projects</h1>
      <h2>Search</h2>
      <Search />
      <h2>Item List</h2>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));