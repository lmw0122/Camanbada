// 채팅방 목록 표시
import React, {useRef} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import axios from 'axios'
// import SockJsClient from 'react-stomp';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import MessageRoom from './MessageRoom';
import IfRoomId from './IfRoomId';


export default function MessageRooms() {
  

  // 채팅 리스트 불러오기

  // date, user, message, chatroomId
  const [lists, setLists] = React.useState([]);
  // 유저 일단 B로 설정
  const [user, setUser] = React.useState('B');
  const [roomId, setRoomId] = React.useState(null);
  let tmp = "";

  // 채팅 리스트를 클릭하면 해당 채팅방 내용을 어떻게 띄워줄지?????
  // 초기에 roomNum을 null이면 채팅방 내용X 
  // -> 채팅방 클릭시 해당 채팅방 내용 표시


  const getLists = async () => {
    await fetch(
        `http://i6c109.p.ssafy.io:8082/chat/list/${user}`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(data => {
      console.log(data);
      setLists(data);
    });
  };
  React.useEffect(() => {
    getLists()
    console.log(lists);
  }, []);
 

  const createMessageRoom = (chatroomId) => {
    setRoomId(chatroomId);
  };
  

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        md={6}  
        align="center"
      >
        {lists.map((list , i) => (
          <Grid onClick={() => { createMessageRoom(list.chatroomId); }}>
            <Typography sx={{ fontWeight: 'bold' }}>
              {list.user}
            </Typography>
            <Typography>
              {list.date} 
            </Typography>
            <Typography>
              {list.message} 
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid 
        item
        md={6}  
        align="center"
      >
        <IfRoomId roomId={roomId}></IfRoomId>
      </Grid>
    </Grid>
  )
}
