import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { DataProvider } from "./context/DataContext.jsx";
//import ArgLive from "./components/ArgLive.jsx";
//import WorldLive from "./components/WorldLive.jsx";
import UCLLive from './components/UCLLive.jsx'
import FriendliesLive from './components/FriendliesLive';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Live from './components/Live';
import MatchDetails from './components/MatchDetails';

function App() {

  return (
    <div className="App">
        <NavBar />
        <Home />
        <Live />
    </div>
  );
}

export default App;