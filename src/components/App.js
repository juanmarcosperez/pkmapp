import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Display from './Display.js';

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {pkmResult: [] };
  }
    
   
    componentDidMount(){
      this.onSearchSubmit('pikachu');
    }

     onSearchSubmit = async term => {
        const response = await axios
      .get(API_URL + term);
       this.setState({pkmResult: response.data});
    }
  

    render(){
        return(
<div className="ui container style={{marginTop: '10px">
    <Header />
    <SearchBar onSubmit = {this.onSearchSubmit}/>
    <Display result={this.state.pkmResult}/>
</div>
        );
    }
}

export default App;