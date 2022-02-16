// 채팅방 목록 표시
import React, { Component,useRef } from "react";
import { Link } from "react-router-dom";
import SocketJsClient from "react-stomp";
import ChatBubble from "./ChatBubble";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default function MessageRoom(chatroomId) {
  const [user, setUser] = React.useState('B');
  const [roomId, setRoomId] = React.useState(0);
  const [chats, setChats] = React.useState([]);
  const [find, setFind] = React.useState({});
  const [count, setCount] = React.useState(0);
  const [chatDone, setChatDone] = React.useState(false);
  const [buttonVisible, setButtonVisible] = React.useState(false);
  const [buttonStyle, setButtonStyle] = React.useState({});
  let sock = new SockJS("http://i6c109.p.ssafy.io:8082/stomp/chatting");
  let stomp = Stomp.over(sock);
  //let buttonStyle = {};

  const getFind = async () => {
    if (roomId === 0) {
      return;
    }
    console.log("getFind act");
    await fetch(
      `http://i6c109.p.ssafy.io:8082/chat/counts/${roomId}`
    ).then(res => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      console.log(data);
      setFind((prevFind) => {
        return Object.assign({}, data[0]);
      });
    });
  };
  ///logs/{chatroomId}/{lastMessageId}/{totalCount}/{count}
  const getChats = async (type) => {
    if (roomId === 0) {
      return;
    }
    console.log("getChats act");
    setCount(count+1);
    await fetch (
        `http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/${find.lastMessageId}/${find.totalCount}/${count+1}`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      setChats(data.concat(chats));
      if(type === 1)
        setChatDone(true);
      setButtonVisible(true);
    });
  };
  const getLogs = () => {
    return chats;
  };
  const scroll = (e) => {
    if (e.target.scrollTop == 0)
      getChats(2);
  };
  // stomp 연결
  const startStomp = () => {
    console.log(roomId);
    if (roomId === 0) {
      return;
    }
    let prevChats = getLogs();
    stomp.connect({}, function (frame) {
      //console.log(frame);
      console.log("Stomp conn!");
      stomp.subscribe("/sub/chatting/room/" + roomId, function (chat) {
        let content = JSON.parse(JSON.parse(JSON.stringify(chat)).body);
        prevChats = prevChats.concat(content);
        console.log(prevChats);
        setChats(prevChats);
      });
    });
  };
  const sendMessage = () => {
    let msg = document.getElementById("userMessageInput");
    stomp.send('/pub/chatting/message', {}, JSON.stringify({ chatroomId: roomId, date: new Date(), message: msg.value, sender: user }));
    msg.value = '';
  };
  React.useEffect(() => {
    console.log("use Effect1 act");
  }, []);
  React.useEffect(() => {
    console.log("useEffect 2 act");
    if (roomId !== chatroomId.chatroomId.roomId) {
      setRoomId(chatroomId.chatroomId.roomId);
      setCount(0);
      setChats([]);
      setButtonVisible(false);
    }
    if (chatDone) {
      startStomp();
      setChatDone(false);
    }
  });
  React.useEffect(() => {
    console.log("useEffect 3 act");
    getFind();
  }, [roomId]);
  React.useEffect(() => {
    console.log("useEffect 4 act");
    getChats(1);
  }, [find]);
  React.useEffect(() => {
    console.log(buttonVisible);
    if (!buttonVisible)
      setButtonStyle({ visibility: 'hidden' });
    else
      setButtonStyle({ visibility: 'visible' });
    console.log(buttonStyle);
  },[buttonVisible]);
  
  return (
    <div>
      <div style={{ height: 700, overflowY: 'auto' }} onScroll={scroll}>
        
        <Grid>
          {chats.map((chat, i) => (
            <ChatBubble chat={ chat } i={ i }></ChatBubble>
            ))}
        </Grid>
      </div>
      <div style={buttonStyle}>
        
        <input id='userMessageInput' type="text"></input>
        <button onClick={sendMessage}>전송</button>

      </div>
    </div>
  )
 
  
}
