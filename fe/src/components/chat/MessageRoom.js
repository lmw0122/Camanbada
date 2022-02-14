// 채팅방 목록 표시
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SocketJsClient from "react-stomp";
import ChatBubble from "./ChatBubble";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from "axios";


export default function MessageRoom(chatroomId) {
  // 시작할 때 totalCount, lastMessageId 가져오고
  // 내역들 다 불러와서 chatbubble 만들고
  // stomp 연결
  // 연결되면 sub 하기
  //sub에서 메세지 받으면 chatbubble 생성
  //전송 버튼 누를때마다 새로운 메세지 pub
  //console.log(1);
  const [user, setUser] = React.useState('B');
  //console.log(2);

  // console.log('chatroomId:', chatroomId)
  // console.log(chatroomId.chatroomId)

  // const [roomId, setRoomId] = React.useState(chatroomId.chatroomId);

  const roomId = chatroomId.chatroomId.roomId;
  

  console.log('roomId는', roomId);
  // 사용할 data: date, message, sender, over
  const [chats, setChats] = React.useState([]);
  //console.log("roomid : "+ roomId);
  // 채팅 기록 api
  const [find, setFind] = React.useState([]);
  //console.log(4);
  const [count, setCount] = React.useState(-1);

  React.useEffect(() => {
    Axios.get(`http://i6c109.p.ssafy.io:8082/chat/counts/${roomId}`)
      .then(res => setFind(res.data))
  }, []);

  console.log('find의 정보:',find);
  // console.log('마지막 메시지의 id:',find[0].lastMessageId);
  
  // const getFind = async() => {
  //   const json = await(
  //     await fetch (`http://i6c109.p.ssafy.io:8082/chat/counts/${roomId}`)
  //   ).json();
  //   setFind(json);
  // };
  // React.useEffect(() => {
  //   getFind()
  // }, []);
  
  


  // React.useEffect(() => {
  //   Axios.get(`http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/${find[0].lastMessageId}/${find[0].totalCount}/${count+1}`)
  //     .then(res => setChats(res.data))
  // }, []);

  // Axios.get(`http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/${find[0].lastMessageId}/${find[0].totalCount}/${count+1}`)
  //   .then(res => setChats(res.data))

  // console.log('채팅방 정보:', chats)


  // const getFind = async () => {
  //   console.log("getFind act");
  //   if (roomId === 0) {
  //     return;
  //   }
  //   await fetch(
  //     `http://i6c109.p.ssafy.io:8082/chat/counts/${roomId}`
  //   ).then(res => {
  //     if (res.ok) {
  //       console.log(1);
  //       return res.json();
  //     }
  //   }).then(data => {
  //     console.log(data[0]);
  //     setFind((prevFind) => {
  //       return Object.assign({}, prevFind, data[0]);
  //     });
  //   });
  // };
  // console.log(find);
  
  ///logs/{chatroomId}/{lastMessageId}/{totalCount}/{count}
  // const getChats = async () => {
  //   console.log("getChats act");
  //   console.log("11 : "+find.totalCount+" "+find.lastMessageId);
  //   setCount(count+1);
  //   await fetch (
  //       `http://i6c109.p.ssafy.io:8082/chat/logs/${roomId}/${find.lastMessageId}/${find.totalCount}/${count+1}`
  //   ).then(res => {
  //     if (res.ok) {
  //       //console.log(res.json());
  //       return res.json();
  //     }
  //   }).then(data => {
  //     console.log(data);
  //     setChats(data.concat(chats));
  //   });
  //   //console.log(chats.concat(json));
  // };
  // console.log(6);
  // React.useEffect(() => {
  //   console.log("use Effect1 act");
  //   getFind();
  // }, []);

  // React.useEffect(() => {
  //   console.log("useEffect 2 act" + find);
  //   getChats();
  // }, [find]);
  // console.log("count : "+count);
  //console.log(7);
  return (
    <div>
      <Grid>
        {chats.map((chat, i) => (
          <ChatBubble chat={ chat } i={ i }></ChatBubble>
          ))}
      </Grid>
      <Button 
        // onClick={getChats} 
        value="add"
        sx={{
          m: 1,
          minWidth: 100,
          height: '7ch'
        }}
      >
        입력 버튼
      </Button>
    </div>
  )
 
  
}