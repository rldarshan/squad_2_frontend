import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const infoCards = [
    {
      id: 1,
      title: "Heart Health",
      description: "Learn about keeping your heart healthy and preventing cardiovascular diseases.",
      link: "/heart-health",
    },
    {
      id: 2,
      title: "Nutrition Tips",
      description: "Explore dietary recommendations for a balanced and nutritious diet.",
      link: "/nutrition-tips",
    },
    {
      id: 3,
      title: "Mental Wellness",
      description: "Discover resources for maintaining mental health and emotional well-being.",
      link: "/mental-wellness",
    },
  ];

  return (
    <Box>
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 0",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img src="/bayer_logo.png" alt="Bayer Logo" style={{ height: 60 }} />
      </Box>

      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Link
            href="/"
            underline="none"
            color="inherit"
            sx={{ margin: "0 20px", cursor: "pointer", fontSize: "16px" }}
          >
            Home
          </Link>
          <Link
            href="/health-topics"
            underline="none"
            color="inherit"
            sx={{ margin: "0 20px", cursor: "pointer", fontSize: "16px" }}
          >
            Health Topics
          </Link>
          <Link
            href="/resources"
            underline="none"
            color="inherit"
            sx={{ margin: "0 20px", cursor: "pointer", fontSize: "16px" }}
          >
            Resources
          </Link>
          <Link
            href="/about-us"
            underline="none"
            color="inherit"
            sx={{ margin: "0 20px", cursor: "pointer", fontSize: "16px" }}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            underline="none"
            color="inherit"
            sx={{ margin: "0 20px", cursor: "pointer", fontSize: "16px" }}
          >
            Contact Us
          </Link>
        </Toolbar>
      </AppBar>

      {/* Banner Section */}
      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundImage: 'url("/home_banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Your Health, Our Priority
        </Typography>
        <Typography variant="body1">
          Explore the latest health information and resources from Bayer Healthcare.
        </Typography>
      </Box>

      {/* Information Cards */}
      <Container sx={{ marginTop: 5 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Featured Topics
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {infoCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card
                sx={{
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    padding: "16px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {card.description}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate(card.link)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
