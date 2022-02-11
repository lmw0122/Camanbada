import Button from '@mui/material/Button';
import React, { Component } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
import { ListItem } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


const ChatBubble = ({ chat, i}) => {
  // 전송자가 본인일 때
  if (chat.sender === 'B') {
    return (
      <Grid align="right">
        <Typography>
          {chat.message} 
        </Typography>
        <Typography>
          {chat.date} 
        </Typography>          
      </Grid>
    )
  } else {
    return (
      <Grid align="left">
        <Typography sx={{ fontWeight: 'bold' }}>
          {chat.sender}
        </Typography>
        <Typography>
          {chat.message} 
        </Typography>
        <Typography>
          {chat.date} 
        </Typography>          
      </Grid>
    )
  }
}


export default ChatBubble;