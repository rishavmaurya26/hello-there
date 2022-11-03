import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/> */}
        {/* <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/> */}
        <Route path="/profile/:username" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;