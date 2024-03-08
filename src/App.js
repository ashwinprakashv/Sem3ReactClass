// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';

const App = () => {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/index.html" element={<Index />} />
</Routes>

    </Router>
  );
};

export default App;
