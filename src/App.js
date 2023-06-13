import React from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";
import NewGroup from "./components/NewGroup";
import Login from "./components/Login";
import CreateGroup from "./components/CreateGroup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newgroup" element={<NewGroup />} />
          <Route path="/creategroup" element={<CreateGroup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
