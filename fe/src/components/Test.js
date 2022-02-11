import Axios from "axios";
import { useEffect, useState } from "react";


export default function Test () {
  const [user, setUser] = useState("");
  const name = "나영";
  const encode = encodeURI(name);

  

  useEffect(() => {
    Axios.post('http://i6c109.p.ssafy.io:8000/user', {
      "email": "de@naver.com",
      "id" : "haha",
      "password" : "1234",
      "nickname" : "haha",
      "intro": "dd",
      "photo": "dd",
      "username": "dd"
    })
        .then((response) => {
            // console.log(response.headers.authorization)
            console.log(response)
            //console.log("token 입니당" + response.headers.authorization)
    });
  }, []);
  return (
    <div>
      {/* <h1>{user[0].intro}</h1> */}
      <h1>ㅋㅋㅋ</h1>
    </div>
  )

}