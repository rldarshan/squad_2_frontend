import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../api/Api";

const Register = () => {
  const [form, setForm] = useState({
    role: "patient", // Default to patient
    name: "",
    email: "",
    phone: "",
    password: "",
    bloodGroup: "",
    dob: "",
    allergies: "",
    consent: false,
  });
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [validationError, setValidationError] = useState(""); // Validation error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);
    setValidationError(""); // Clear previous validation error

    // Form Validation
    if (!form.name || !form.email || !form.password || !form.consent) {
      setValidationError("Name, Email, Password, and Consent are required.");
      return;
    }

    try {
      const response = await API.post("/signup", form);
      setMessage(response.data.message);
      setIsError(false);
      setForm({
        role: "patient",
        name: "",
        email: "",
        phone: "",
        password: "",
        bloodGroup: "",
        dob: "",
        allergies: "",
        consent: false,
      });
      setTimeout(() => navigate("/login"), 1500);
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
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            backgroundImage: 'url("/doctor.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Logo */}
          <img src="/bayer_logo.png" alt="Bayer Logo" style={{ width: 120, marginBottom: 20 }} />

          <Typography variant="h4" gutterBottom>
            Register With Us
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
            {/* Role Selection */}
            <TextField
              select
              label="Role"
              fullWidth
              margin="normal"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <MenuItem value="patient">Patient</MenuItem>
              <MenuItem value="doctor">Doctor</MenuItem>
            </TextField>

            {/* Common Fields */}
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={!form.name && validationError !== ""}
              helperText={!form.name && validationError !== "" ? "Name is required." : ""}
            />
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
            <TextField
              label="Phone Number"
              type="tel"
              fullWidth
              margin="normal"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* Patient-Specific Fields */}
            {form.role === "patient" && (
              <>
                <TextField
                  label="Blood Group"
                  fullWidth
                  margin="normal"
                  value={form.bloodGroup}
                  onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
                />
                <TextField
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={form.dob}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                />
                <TextField
                  label="Allergies"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  value={form.allergies}
                  onChange={(e) => setForm({ ...form, allergies: e.target.value })}
                />
              </>
            )}

            {/* Consent Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
              }
              label="I consent to the use of my data"
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Register
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
            Already have an account?{" "}
            <Button variant="text" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
