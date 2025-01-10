import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [message, setMessage] = useState(""); // For logout message
  const navigate = useNavigate();

  // Sample data for the dashboard
  const todaysAppointments = [
    { id: 1, time: "9:00 AM", patient: "John Doe", reason: "Routine Checkup" },
    { id: 2, time: "11:00 AM", patient: "Jane Smith", reason: "Follow-up" },
  ];

  const recentPatients = [
    { id: 1, name: "Michael Johnson", lastVisit: "2025-01-09", action: "View" },
    { id: 2, name: "Emily Brown", lastVisit: "2025-01-08", action: "View" },
  ];

  // Logout handler
  const handleLogout = () => {
    setMessage("User logged out");
    setActiveTab("logout");
    setTimeout(() => {
      navigate("/"); // Redirect to home page after 1.5 seconds
    }, 1500);
  };

  // Function to render content dynamically based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Box>
            <Typography variant="h5" gutterBottom>
              Today's Appointments
            </Typography>
            {todaysAppointments.map((appointment) => (
              <Card key={appointment.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>
                    <strong>Time:</strong> {appointment.time}
                  </Typography>
                  <Typography>
                    <strong>Patient:</strong> {appointment.patient}
                  </Typography>
                  <Typography>
                    <strong>Reason:</strong> {appointment.reason}
                  </Typography>
                </CardContent>
              </Card>
            ))}

            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Recent Patients
            </Typography>
            {recentPatients.map((patient) => (
              <Card key={patient.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography>
                    <strong>Name:</strong> {patient.name}
                  </Typography>
                  <Typography>
                    <strong>Last Visit:</strong> {patient.lastVisit}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={() => alert(`Viewing details for ${patient.name}`)}
                  >
                    {patient.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        );
      case "patient-list":
        return <Typography variant="h5">Patient List Content Here</Typography>;
      case "appointments":
        return <Typography variant="h5">Appointments Content Here</Typography>;
      case "messages":
        return <Typography variant="h5">Messages Content Here</Typography>;
      case "logout":
        return (
          <Typography variant="h5" gutterBottom>
            {message || "Logging out..."}
          </Typography>
        );
      default:
        return <Typography variant="h5">Welcome to Bayer Health Dashboard</Typography>;
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Navigation Panel */}
      <Grid
        item
        xs={3}
        sx={{
          backgroundColor: "#1976d2",
          color: "#ffffff",
          height: "100%",
          padding: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Bayer Health
        </Typography>
        <Divider sx={{ mb: 2, backgroundColor: "rgba(255, 255, 255, 0.5)" }} />
        <List>
          <ListItem button onClick={() => setActiveTab("dashboard")}>
            <ListItemText primary="Dashboard" sx={{ color: "#ffffff" }} />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("patient-list")}>
            <ListItemText primary="Patient List" sx={{ color: "#ffffff" }} />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("appointments")}>
            <ListItemText primary="Appointments" sx={{ color: "#ffffff" }} />
          </ListItem>
          <ListItem button onClick={() => setActiveTab("messages")}>
            <ListItemText primary="Messages" sx={{ color: "#ffffff" }} />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" sx={{ color: "#ffffff" }} />
          </ListItem>
        </List>
      </Grid>

      {/* Right Content Panel */}
      <Grid item xs={9} sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default DoctorDashboard;