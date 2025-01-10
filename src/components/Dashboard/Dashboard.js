import React, { useState } from 'react';
import { CssBaseline, Toolbar, AppBar, Typography, Box } from '@mui/material';
import MainContent from '../Dashboard/MainContent';


const Dashboard = () => {
  const [content, setContent] = useState('Welcome! Click a menu item to change this content.');
  const onSelect = (newContent) => { setContent(newContent); };


  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Responsive Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <MainContent selectedSection={content} />


    </div>
  );
};

export default Dashboard;
