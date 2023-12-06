import { Component } from 'react'
import './App.css';
import { MonsterList } from './components/monster-list/monster-list.component'
import { SearchBox } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
      this.setState(() => {
        return { monsters: users }
      })
    })
  }

  filterMonster(event) {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchText: searchString };
    });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchText);
    });
    return (
      <div className="App">
        <SearchBox changeHandler={this.filterMonster.bind(this)}></SearchBox>
        <MonsterList monsters={filteredMonsters}></MonsterList>
      </div>
    );
  }
}

export default App;
