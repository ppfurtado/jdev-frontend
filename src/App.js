import React from "react";
import "./App.css";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";
import EditUser from "./components/EditUser/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-usuario" element={<CreateUser />} />
          <Route path="/atualizar/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
