import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import FriendsList from "./FriendsList";
import NewFriendForm from "./NewFriendForm"
import uuidv4 from "uuid/v4"

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      id:null,
      name:"",
      age:"",
      email:""
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  addNewFriend = e => {
    this.setState({
      id: uuidv4(),
      name: this.state.name,
      age: this.state.age,
      email:this.state.email
    })

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
      <div>
      <FriendsList friends={this.state.friends} />
      <NewFriendForm addNewFriend={this.addNewFriend} changeHandler={this.changeHandler}/>
      </div>
    )
  }
}

export default App;
