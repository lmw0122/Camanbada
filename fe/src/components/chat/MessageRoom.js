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
import Axios from 'axios'

export default function MessageRoom(chatroomId) {
  // 시작할 때 totalCount, lastMessageId 가져오고
  // 내역들 다 불러와서 chatbubble 만들고
  const [user, setUser] = React.useState('B');
  //console.log(2);
  //console.log(chatroomId);
  const [roomId, setRoomId] = React.useState(0);
  console.log(roomId);
  // 사용할 data: date, message, sender, over
  const [chats, setChats] = React.useState([{message : 1}]);
  //console.log("roomid : "+ roomId);
  // 채팅 기록 api
  let [find, setFind] = React.useState({});
  //console.log(4);
  const [count, setCount] = React.useState(0);

  const [loading, setLoading] = React.useState(true);

  const [newChats, setNewChats] = React.useState([]);

  const [num, setNum] = React.useState(0);


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
        //console.log(1);
        return res.json();
      }
    }).then(data => {
      //console.log(data[0]);
      setFind((prevFind) => {
        return Object.assign({}, data[0]);
      });
    });
  };

  const getChats = async () => {
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
      
    });
  };

  React.useEffect(() => {
    //setRoomId(chatroomId.chatroomId.roomId);
    console.log("use Effect1 act");
  }, []);

  React.useEffect(() => {
    console.log("useEffect 2 act");
    if (roomId !== chatroomId.chatroomId.roomId) {
      setRoomId(chatroomId.chatroomId.roomId);
      setCount(0);
      setChats([]);
    }
  });

  React.useEffect(() => {
    console.log("useEffect 3 act");
    //console.log("roomId : "+roomId);
    getFind();
  }, [roomId]);

  React.useEffect(() => {
    console.log("useEffect 4 act" + find);
    getChats();
    //startStomp();
  }, [find]);

  React.useEffect(() => {
    if (chats.length === 0) {
      return;
    } else {
      startStomp();
    }
  }, [chats])

  const addMessage = (newMessage) => {
    setChats(chats.concat(newMessage));
    
  };

  const scroll = (e) => {
    if (e.target.scrollTop == 0)
      getChats();
  };

  let sock = new SockJS("http://i6c109.p.ssafy.io:8082/stomp/chatting");
  let stomp = Stomp.over(sock);
  // stomp 연결
  const startStomp = () => {
    console.log(chats);
    if (roomId === 0) {
      return;
    }
    if (stomp.connected)
      stomp.disconnect();
    stomp.connect({}, function (frame) {
      //console.log(frame);
      console.log("Stomp conn!");
      console.log(chats);
      stomp.subscribe("/sub/chatting/room/" + roomId, function (chat) {
        let content = JSON.stringify(chat);
        console.log(chats);
        console.log(content);
        addMessage(content);
      });
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    let msg = document.getElementById("userMessageInput");
    //console.log("user message" + msg.value);
    stomp.send('/pub/chatting/message', {}, JSON.stringify({ chatroomId: roomId, date: new Date(), message: msg.value, sender: user }));
    msg.value = '';
    // setLoading(false);
    setNum(num + 1);
    console.log('num은!!!!!', num);


  };

  React.useEffect(() => {
    Axios.get(`http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/${find.lastMessageId}/${find.totalCount}/${count+1}`)
      .then(res => {
        setNewChats(res.data);
        console.log('new chat 불러오기')
        setLoading(false);
      })
  }, [num]);
  // 연결되면 sub 하기
  //sub에서 메세지 받으면 chatbubble 생성
  //전송 버튼 누를때마다 새로운 메세지 pub
  //console.log(1);

  return (
    <div>

      {loading ? (
        <div style={{ height: 700, overflowY: 'auto' }} onScroll={scroll}>
        <Grid>
          {chats.map((chat, i) => (
            <ChatBubble chat={ chat } i={ i }></ChatBubble>
            ))}
        </Grid>
      </div>
      ) : (

      <div style={{ height: 700, overflowY: 'auto' }} onScroll={scroll}>
        <Grid>
          {newChats.map((chat, i) => (
            <ChatBubble chat={ chat } i={ i }></ChatBubble>
            ))}
        </Grid>
      </div>
      )
      }

      {/* <div style={{ height: 700, overflowY: 'auto' }} onScroll={scroll}>
        <Grid>
          {chats.map((chat, i) => (
            <ChatBubble chat={ chat } i={ i }></ChatBubble>
            ))}
        </Grid>
      </div> */}

      <div>
        <input id='userMessageInput' type="text"></input>
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  )
 
  
}