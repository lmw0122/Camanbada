import Button from '@mui/material/Button';
import React, { Component,useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
import { ListItem } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

//const [moreButtonStyle, setMoreButtonStyle] = React.useState({});

const ChatBubble = ({ chat, i}) => {
  const getOverMessage = async (messageId) => {
    console.log("getOverMessage act");
    await fetch(
      `http://localhost:8082/chat/over/${messageId}`
    ).then(res => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      console.log(data);
      let cM = document.getElementById(chat.message_id);
      cM.innerText = chat.message + data.overMessage;
    });
  };
  // 전송자가 본인일 때
  if (chat.sender === 'B') {
    if (chat.over) {
      return (
        <Grid align="right">
          <Typography id={chat.message_id}>
            {chat.message} 
          </Typography>
          <Typography>
            {chat.date} 
          </Typography> 
          <button onClick={() => { getOverMessage(chat.message_id) }}>더보기</button>
        </Grid>
      )
    }
    else {
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
    }
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