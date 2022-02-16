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
import { createRoutesFromChildren, Link, useLocation } from "react-router-dom";
import MessageRoom from './MessageRoom';
import IfRoomId from './IfRoomId';

export default function MessageRooms() {
  
  const [user, setUser] = React.useState();
  const [oppUser, setOppUser] = React.useState("");
  const location = useLocation();
  console.log(location.state);
  let fromProfile = false;
  // 채팅 리스트 불러오기
  // date, user, message, chatroomId
  const [lists, setLists] = React.useState([]);
  // 유저 일단 B로 설정
  const [roomId, setRoomId] = React.useState(0);
  const accessToken = localStorage.getItem("accessToken");
  const HEADER = {
    headers: {
      'Authorization': accessToken
    }
  }
  // 채팅 리스트를 클릭하면 해당 채팅방 내용을 어떻게 띄워줄지?????
  // 초기에 roomNum을 null이면 채팅방 내용X 
  // -> 채팅방 클릭시 해당 채팅방 내용 표시
  function getLists(myUser) {
    axios.get(
      `http://i6c109.p.ssafy.io:8000/chat/list/${myUser}`, HEADER
    ).then(res => {
      console.log(res);
      setLists(res.data);
    })
  }
  const getUserId = async () => {
    axios.get(`http://i6c109.p.ssafy.io:8000/chat/user`, HEADER)
      .then(res => {
        console.log(res);
        setUser(res.data);
        getLists(res.data);
    })
  };
  const createRoom = (userFromProfile) => {
    axios.post(`http://i6c109.p.ssafy.io:8000/chat/room/${userFromProfile}`, {}, HEADER).then(
      res => {
        console.log(res);
        if (res.status === 200) {
          setRoomId(res.data.chatroomId);
        }
        else {
          console.log(res.data.message);
        }
      }
    )
  };
  const getRoomId = (userFromProfile) => {
    axios.get(`http://i6c109.p.ssafy.io:8000/chat/enter/${userFromProfile}`, HEADER)
      .then(res => {
        console.log(res);
        if (res.status === 204) {
          //방을 새로 만들어야할 때
          let myChatroomId = createRoom(userFromProfile);
          
        }
        else {
          console.log(res.data.chatroomId);
        }
      })
  };
  React.useEffect(() => {
    getUserId();
    if (location.state !== null) {
      const userFromProfile = location.state.oppUserId;
      console.log(userFromProfile);
      setOppUser(userFromProfile);
      getRoomId(userFromProfile);
    }
  }, []);
  console.log(user);
  const createMessageRoom = (chatroomId) => {
    setRoomId(chatroomId);
    console.log(roomId);
  };
  console.log(roomId);
  

 
  
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

