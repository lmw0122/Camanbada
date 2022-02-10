import Axios from "axios";
import { useEffect, useState } from "react";


export default function Test () {
  const [user, setUser] = useState("");
  const name = "나영";
  const encode = encodeURI(name);

  Axios.post("http://i6c109.p.ssafy.io:8000/user/", {
    "id" : "1234",
    "password" : "1234",
    "nickname" : "gkgk",
  })
  .then(function (response) {
    console.log(response)  
  }).catch(function (error) {
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });

  // useEffect(() => {
  //   Axios.post('http://i6c109.p.ssafy.io:8000/user/login', {
  //     "id" : "1234",
  //     "password" : "1234"
  //   })
  //   .then((response) => {
  //     console.log(1)
  //   });
  // }, []);
  return (
    <div>
      {/* <h1>{user[0].intro}</h1> */}
      <h1>ㅋㅋㅋ</h1>
    </div>
  )

}