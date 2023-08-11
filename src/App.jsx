import "./App.css";
//import { DataProvider } from "./context/DataContext.jsx";
//import ArgLive from "./components/ArgLive.jsx";
//import WorldLive from "./components/WorldLive.jsx";
import UCLLive from './components/UCLLive.jsx'
import FriendliesLive from './components/FriendliesLive';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Live from './components/Live';

function App() {

  return (
    <div className="App">
      {/* <DataProvider> */}
        <NavBar />
        <Home />
        <Live />
      {/* </DataProvider> */}
    </div>
  );
}

export default App;