import React from 'react';
import './App.css';
import axios from 'axios'
import PlayerData from './Components/PlayerData'

export const getByTest =()=>{

}
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
     .then(res => {
      //  console.log("Please work" , res.data)
       this.setState({players: res.data})
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