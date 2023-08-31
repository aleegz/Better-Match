import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Live from './components/Live';
import Today from './components/Today'
import MatchDetails from './components/MatchDetails';
import Landing from './pages/Landing';

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