import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage  from './components/HomePage';
import  RegisterPage  from './components/RegisterPage';
import  LoginPage  from './components/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      


    </Router>
  );
};

export default App;
