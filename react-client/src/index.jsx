import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ProjectList from './components/ProjectList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        {description: 'one'},
        {description: 'two'},
        {description: 'three'},
        {description: 'four'}
      ],
      projects: [
        {
          title: 'title1',
          city: 'city1',
          state: 'state1',
          costToComplete: 'costToComplete1',
          expirationDate: 'expirationDate1'
        },
        {
          title: 'title2',
          city: 'city2',
          state: 'state2',
          costToComplete: 'costToComplete2',
          expirationDate: 'expirationDate2'
        },
        {
          title: 'title3',
          city: 'city3',
          state: 'state3',
          costToComplete: 'costToComplete3',
          expirationDate: 'expirationDate3'
        }
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
      <h2>Project List</h2>
      <ProjectList projects={this.state.projects}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));