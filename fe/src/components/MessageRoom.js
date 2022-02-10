// 채팅방 목록 표시
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SocketJsClient from "react-stomp";


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class MessageRoom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="container">
              <div>
                  <ul each="room : ${list}">
                      {/* <li><a href="@{/chat/room(roomId=${room.roomId})}">[[${room.name}]]</a></li> */}
                      <li><a href="@{/chat/room(roomId=${room.roomId})}">zz</a></li>
                  </ul>
              </div>
          </div>
          <form action="@{/chat/room}" method="post">
              <input type="text" name="name" class="form-control"/>
              <button class="btn btn-secondary">개설하기</button>
          </form>
      </div>
    )
  }
}

export default MessageRoom;