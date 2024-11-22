// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Intro onNext={() => {}} />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        

        <Route path="/detail/:id" element={<Detail />} />
        
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
