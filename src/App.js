
import './Styles/App.css';
import './Styles/Card.css'
import Home from './components/Home';
import  Search  from './components/Search/Search.jsx';
import Nav from './components/Navbar/Nav.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FilterType from './components/FilterPokemon/FilterType';


function App() {
  
  

  return (
    
    <Router>
      <Nav />
      <div className='App-header'>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element= { <Search />} />
        <Route exact path="/elementfilter" element= {<FilterType />}/>
    </Routes>
    </div>
    </Router>

  )
}

export default App;
