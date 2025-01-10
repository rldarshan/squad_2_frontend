import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Dashboard, Settings } from '@mui/icons-material';

const Sidebar = ({ onSelect }) => {
  return (
    <Drawer variant="permanent" open={true}>
      <List>
        {['Home', 'Dashboard', 'Settings'].map((text, index) => (
          <ListItem button key={text} onClick={() => onSelect(text)}>
            <ListItemIcon>
              {index === 0 ? <Home /> : index === 1 ? <Dashboard /> : <Settings />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
