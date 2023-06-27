import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Potter from './pages/Potter';

const App = () => {

  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {      
        const response = await fetch('https://legacy--api.herokuapp.com/api/v1/characters');
        const data = await response.json();      
        setAllCharacters(data);      
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>        
      </nav>

      <Routes>
        <Route path="/" element={ <Home potterArray={allCharacters}/> } />
        <Route path="/potter/:id" element={ <Potter /> } />       
      </Routes>

    </BrowserRouter>
  );
}

export default App;
