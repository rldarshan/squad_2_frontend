import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import DoctorDashboard from "./pages/DoctorDashboard";

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />

      </Routes>
    </Router>
  </ThemeProvider>
  );
};

export default App;
