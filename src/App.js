import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar'
import User from './components/User'

class App extends Component {

  state = {
    users: [],
    isVisible: false
  }

  componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="container">
          <Navbar  title = "Rehber"/>
          <hr/>
          {/* <User
          name = "Ekin Serin"
          salary = "9500"
          department = "Bilişim"
          /> */}
          {this.state.users.map((data) => <User data = {data} />)}
      </div>
    )
  }

}

export default App;
