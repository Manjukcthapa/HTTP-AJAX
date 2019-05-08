import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import FriendsList from "./FriendsList"

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  async componentDidMount() {
    try {
      let res = await axios.get('http://localhost:5000/friends');
      this.setState({ friends: res.data })
    } catch (err) {
      console.error(err)
    }
  }
  
  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(response => this.setState({ friends: response.data}) )
  //     .catch(error => console.log(error))
  // }

  render() {
    return (
      <FriendsList friends={this.state.friends} />
    )
  }
}

export default App;
