import React, { Component } from 'react';
import'./styles/App.css';

import List from './List';
import View from './View';
import Poke from './model/Poke';

class App extends Component{
  /*
  le constructeur
  */
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  /*
  recuperation des informations des pokemon par id
  */
  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        const pokemon = new Poke(data);
        this.setState({ pokemon });
        //console.log(pokemon);
      })
  }

  render() {
    return(
    <div className="App">
       <List handleOnClick={this.handleOnClick}/>
       <View pokemon={this.state.pokemon}/>
      </div>
      );
    }
  }
  export default App;