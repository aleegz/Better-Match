import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Live from "./components/Live";
import Today from "./components/Today";
import MatchDetails from "./pages/matchDetails/MatchDetails";
import Details from "./pages/Details";
import Landing from "./pages/Landing";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from './pages/Account';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/live" element={<Live />} />
          <Route path="/today" element={<Today />} />
          <Route path="/account" element={<Account />} />
          <Route path="/matchdetails/:id" element={<Details />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
