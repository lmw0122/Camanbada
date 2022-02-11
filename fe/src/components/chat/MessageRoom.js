// 채팅방 목록 표시
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SocketJsClient from "react-stomp";
import ChatBubble from "./ChatBubble";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function MessageRoom() {

  const [user, setUser] = React.useState('B');
  const [roomId, setRoomId] = React.useState(2);
  // 사용할 data: date, message, sender, over
  const [chats, setChats] = React.useState([]);
  // 채팅 기록 api
  const [find, setFind] = React.useState([]);

  const [count, setCount] = React.useState(1);


  const getFind = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8082/chat/counts/${roomId}`
      )
    ).json();
    setFind(json);
  };
  React.useEffect(() => {
    getFind()
  }, []);
  
  // console.log(find)
  // console.log(find[0])
  // console.log(find[0].totalCount)


  const getChats = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/7/5/1`
      )
    ).json();
    setChats(json);
  };
  React.useEffect(() => {
    getChats()
  }, []);
  
  return (
    <Grid>
      {chats.map((chat, i) => (
        <ChatBubble chat={ chat } i={ i }></ChatBubble>
      ))}
    </Grid>
  )
 
  
}

