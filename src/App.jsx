import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Live from './components/Live';
import MatchDetails from './components/MatchDetails';
import Today from './components/Today'

function App() {

  return (
    <div className="App">
        <NavBar />
        <Home />
        <Live />
        <Today />
    </div>
  );
}

export default App;