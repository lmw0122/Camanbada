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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import MessageRoom from './MessageRoom';
import IfRoomId from './IfRoomId';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavBar from '../../components/common/NavBar';

const theme = createTheme();

export default function MessageRooms() {
  

  // 채팅 리스트 불러오기

  // date, user, message, chatroomId
  const [lists, setLists] = React.useState([]);
  // 유저 일단 B로 설정
  const [user, setUser] = React.useState();
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
      // if (res.ok) {
      //   data = res.json();
      //   console.log(data);
      //   setUser(data);
      //   getLists();
      // }
    })
  };
  
  React.useEffect(() => {
    getUserId();
    //getLists();
    console.log(lists);
  }, []);
  // React.useEffect(() => {
  //   console.log(user);
  //   getLists();
  // }, [user]);
  const createMessageRoom = (chatroomId) => {
    setRoomId(chatroomId);
    console.log(roomId);
  };
  console.log(roomId);
  

 
  
  return (

    <Grid container component="main" sx={{ mt: 15}}>
      <CssBaseline />
      <Grid
        item
        md={6}
        align="center"
      >
        {lists.map((list , i) => (
          <Grid 
            onClick={() => { createMessageRoom(list.chatroomId); }}
            justifyContent="center"
            alignItems="center"
            md={6}
            direction="row"
          >
            <Stack direction="row" alignItems="center">
              <Grid item align="center" sx={{ mr:1 }}>
                <AccountCircleIcon sx={{ fontSize: 50 }} />
              </Grid>
              <Grid>
                <Stack direction="row" spacing={2}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {list.user}님
                  </Typography>
                  <Typography align="right">
                    {list.date} 
                  </Typography>
                </Stack>
                <Stack>
                  <Typography align="left">
                    {list.message} 
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
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

    // <Container>
    //   <Grid direction="row">
    //     {lists.map((list , i) => (
    //       <Grid 
    //         onClick={() => { createMessageRoom(list.chatroomId); }}
    //         justifyContent="center"
    //         alignItems="center"
    //         md={6}
    //       >
    //         <Grid item align="center" md={2.4} sx={{ mr: 4 }}>
    //           <AccountCircleIcon sx={{ fontSize: 50 }} />
    //         </Grid>
    //         <Stack direction="row">
    //           <Stack direction="row">
    //             <Typography sx={{ fontWeight: 'bold' }}>
    //               {list.user}
    //             </Typography>
    //             <Typography>
    //               {list.date} 
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //         <Typography>
    //           {list.message} 
    //         </Typography>
    //       </Grid>
    //     ))}
    //     <Grid 
    //       item
    //       md={6}  
    //       align="center"
    //     >
    //       <IfRoomId roomId={roomId}></IfRoomId>
    //     </Grid>
    //   </Grid>
    // </Container>
 
    

  )
  
}

