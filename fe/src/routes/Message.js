// import * as React from "react";
// import * as Stomp from 'stompjs';
// import * as SockJS from "sockjs-client";

// import MessageRoom from "../components/chat/MessageRoom";
import MessageRooms from "../components/chat/MessageRooms";

export default function Message () {

  return (
    <div>
      {/* <MessageRoom></MessageRoom> */}
      <MessageRooms></MessageRooms>
    </div>
  )
}