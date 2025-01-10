import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../api/Api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [validationError, setValidationError] = useState(""); // For form validation error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);
    setValidationError(""); // Clear previous validation error

    // Basic form validation
    if (!form.email || !form.password) {
      setValidationError("Email and Password fields cannot be empty.");
      return;
    }

    try {
      const { data } = await API.post("/login", form);
      localStorage.setItem("token", data.token);
      setMessage("Login successful!");
      setIsError(false);
      setTimeout(() => navigate("/DoctorDashboard"), 1500);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
      setIsError(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          padding: 3,
          textAlign: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Logo */}
        <img src="/bayer_logo.png" alt="Bayer Logo" style={{ width: 120, marginBottom: 20 }} />

        <Typography variant="h4" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sign in to access your dashboard.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            error={!form.email && validationError !== ""}
            helperText={!form.email && validationError !== "" ? "Email is required." : ""}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            error={!form.password && validationError !== ""}
            helperText={!form.password && validationError !== "" ? "Password is required." : ""}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
        </form>
        {validationError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {validationError}
          </Alert>
        )}
        {message && (
          <Alert severity={isError ? "error" : "success"} sx={{ mt: 2 }}>
            {message}
          </Alert>
        )}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Button variant="text" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
