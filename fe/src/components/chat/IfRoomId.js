import MessageRoom from "./MessageRoom";


const IfRoomId = (roomId) => {
  console.log('이프룸에서 룸아이디:', roomId.roomId)
  if (roomId.roomId === 0) {
    return <div>채팅방을 선택해주세요.</div>
  } else {
    return <MessageRoom chatroomId={roomId}></MessageRoom>
  }
}

export default IfRoomId;