import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
    constructor(){
      super();
      this.state = {
        monsters:[],
        searchField:''
      };
      //this.handleChange = this.handleChange.bind(this);
    }

    /*handleChange(e){
      this.setState({searchField: e.target.value})
    }*/
    handleChange = e =>{
      this.setState({searchField: e.target.value})
    }

   componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then(users => this.setState({monsters:users}));
    }

render(){
  const {monsters, searchField} = this.state
  const searchingMonster = monsters.filter( monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
   )
  return (
    <div className="App">
      <h1>Monster rolodex</h1>
     <SearchBox
      placeholder="search monster"
      handleChange={this.handleChange}
      //handleChange ={e => this.setState({searchField: e.target.value})}
     />
    <CardList monsters={searchingMonster} />
  
    </div>
  );
}


}





export default App;
