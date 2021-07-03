import React from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";

function App() {
  return (
    <div className="App">
      <h2>CRUD SPRINGBOOT API REST</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-usuario" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
