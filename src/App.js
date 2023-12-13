import { useState, useEffect } from 'react'
import './App.css';
import { MonsterList } from './components/monster-list/monster-list.component'
import { SearchBox } from './components/search-bar/search-bar.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  // first argument is callback to run without any effect, and other argument is array of dependencies on change of which first argument function will be called
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
      setMonsters(users)
    })
  }, [])

  // run filtermonsters only when either searchfield change or monster change. 
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonsters)
  }, [monsters, searchField])

  function filterMonster(event) {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  return (
    <div className="App">
      <SearchBox changeHandler={filterMonster}></SearchBox>
      <MonsterList monsters={filteredMonsters}></MonsterList>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchText: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
//       this.setState(() => {
//         return { monsters: users }
//       })
//     })
//   }

//   filterMonster(event) {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchText: searchString };
//     });
//   }

//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchText);
//     });
//     return (
//       <div className="App">
//         <SearchBox changeHandler={this.filterMonster.bind(this)}></SearchBox>
//         <MonsterList monsters={filteredMonsters}></MonsterList>
//       </div>
//     );
//   }
// }

export default App;
