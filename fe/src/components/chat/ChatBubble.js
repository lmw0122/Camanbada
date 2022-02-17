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
import Axios from "axios";

//const [moreButtonStyle, setMoreButtonStyle] = React.useState({});

const ChatBubble = ({ chat, i, userId, oppNickname }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const [isSec, setIsSec] = React.useState(false);
  const [originM, setoriginM] = React.useState("");
  const [overdM, setoverdM] = React.useState("");
  
  console.log(oppNickname + " " + userId)
  const getOverMessage = async (messageId) => {
    console.log("getOverMessage act");
    if (isSec) {
      let cM = document.getElementById(chat.message_id);
      cM.innerText = originM + overdM;
    }
    else {
      await fetch(
        `http://i6c109.p.ssafy.io:8000/chat/over/${messageId}`, {
          headers: {
            'Authorization': accessToken
          }
        }
      ).then(res => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      }).then(data => {
        console.log(data);
        setoverdM(data.overMessage);
        setIsSec(true);
        let cM = document.getElementById(chat.message_id);
        cM.innerText = chat.message + data.overMessage;
      });  
    }
    setIsClicked(true);
  };
  const deleteOverMessage = () => {
    let cM = document.getElementById(chat.message_id);
    cM.innerText = originM;
    setIsClicked(false);
  }
  React.useEffect(() => {
    setoriginM(chat.message);
  },[])
  // 전송자가 본인일 때
  if (chat.sender == userId) {
    if (chat.over) {
      return (
        <Grid align="right">
          <Typography id={chat.message_id}>
            {chat.message}
          </Typography>
          <Typography>
            {chat.date}
          </Typography>
          {isClicked ? <button onClick={() => { deleteOverMessage() }}>줄이기</button>
          : <button onClick={() => { getOverMessage(chat.message_id) }}>더보기</button>}
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
    if (chat.over) {
      return (
        <Grid align="left">
          <Typography sx={{ fontWeight: 'bold' }}>
            {oppNickname}
          </Typography>
          <Typography id={chat.message_id}>
            {chat.message}
          </Typography>
          <Typography>
            {chat.date}
          </Typography>
          {isClicked ? <button onClick={() => { deleteOverMessage() }}>줄이기</button>
          : <button onClick={() => { getOverMessage(chat.message_id) }}>더보기</button>}
        </Grid>
      )
    }
    else {
      
      return (
        <Grid align="left">
          <Typography sx={{ fontWeight: 'bold' }}>
            {oppNickname}
          </Typography>
          <Typography id={chat.message_id}>
            {chat.message}
          </Typography>
          <Typography>
            {chat.date}
          </Typography>
        </Grid>
      )
    }
  }
}



export default ChatBubble;