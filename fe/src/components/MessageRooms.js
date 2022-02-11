// 채팅방 목록 표시
import React, {useRef} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
// import SockJsClient from 'react-stomp';



export default function MessageRooms() {


  var sockJs = new SockJS("http://i6c109.p.ssafy.io:8082/stomp/chatting");
                
  var stomp = Stomp.over(sockJs);

  stomp.connect({}, function (){
    console.log("STOMP Connection")
    stomp.subscribe("/sub/chatting/room/2", function (chat) {
      var content = JSON.parse(chat.body);
      console.log(content)
      console.log('하하')
     });
    
  
    
 });

  function bs () {
    var msg = document.getElementById("msg");
    // console.log(username + ":" + msg.value);
    stomp.send('pub/chatting/message', {}, JSON.stringify({chatroomId : "2", message : msg.value, sender : "B"}));
    msg.value = '';

  }

  // $("#button-send").on("click", function(e){
  //     var msg = document.getElementById("msg");

  //     console.log(username + ":" + msg.value);
  //     stomp.send('/pub/chat/message', {}, JSON.stringify({roomId: roomId, message: msg.value, writer: username}));
  //     msg.value = '';
  // });
  
  return (
    <div>
      <div class="container">
          <div class="col-6">
              <h1>채팅방</h1>
          </div>
          <div>
              <div id="msgArea" class="col"></div>
              <div class="col-6">
                  <div class="input-group mb-3">
                      <input type="text" id="msg" class="form-control" />
                      <div class="input-group-append">
                          <button onClick={bs} class="btn btn-outline-secondary" type="button" id="button-send">전송</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-6"></div>
      </div>
    </div>
  )
  
}

