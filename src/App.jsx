import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Live from "./components/Live";
import Today from "./components/Today";
import MatchDetails from "./pages/matchDetails/MatchDetails";
import Details from './pages/Details';
import Landing from "./pages/Landing";
import Initial from "./pages/Initial";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/live" element={<Live />} />
        <Route path="/today" element={<Today />} />
        <Route path="/matchdetails/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
