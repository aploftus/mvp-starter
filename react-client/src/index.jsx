import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProjectList from './components/ProjectList.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects: []
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.getProjects.call(this);
  }

  getProjects() {
    $.ajax({
      url: '/projects', 
      success: (data) => {
        this.setState({
          projects: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Donors Choose Urgent Projects</h1>
      <h2>Search</h2>
      <Search />
      <h2>Project List</h2>
      <ProjectList projects={this.state.projects}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));