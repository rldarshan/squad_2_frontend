import React, { useState, useEffect } from 'react';
import { Box, Typography, ListItem, List, ListItemText } from '@mui/material';
import { useGetAllPatientQuery } from '../../store/api/patientApi';
import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const MainContent = ({ selectedSection }) => {

  console.log('selection', selectedSection)

  const [patientList, setpatientList] = useState([])

  const { data } = useGetAllPatientQuery()

  useEffect(() => {
    if (data) {
      console.log('data',data)
      setpatientList(data)
    }
  }, [data])



  return (
    <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
      <List> {patientList.map((item, index) => (<ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item?.name} secondary={`${item?.bloodGroup}, ${item?.address}`} />
      </ListItem>
      ))} </List>

    </Box>
  );
};

export default MainContent;
