import React from 'react';
import './App.css';
import axios from 'axios'
import PlayerData from './Components/PlayerData';
import { loginUser } from "./Hooks/useInputValue";

class App extends React.Component {

  constructor() {
    super();
    this.state={
      players: []
    }
  }




  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players' )
     .then(response => {
      //  console.log("Please work" , response.data)
       this.setState({players: response.data})
     })
     .catch(error => console.log('Catch error', error))
  }



  render () {
  return (
    <div className="App">
      <h1>Women's World Cup players</h1>
      <PlayerData players={this.state.players} />
    </div>
   );
  } 
}

export default App;