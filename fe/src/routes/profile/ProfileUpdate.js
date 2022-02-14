import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { Container, CssBaseline, Typography, Grid, TextField, Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from '../../components/common/NavBar'
import { useParams } from 'react-router-dom';

const Input = styled('input')({
  display: 'none',
});

const spanStyle ={ 
  marginTop : "10px"
}

export default function Update() {
  // 실시간 글자수 체크
  const [ textLength, setTextLength ] = useState('0');
  
  const onKeyUp = (e) => {
    const totalText = e.target.value;
    const totalLength = totalText.length;
    setTextLength(totalLength);
  }
  
  // 닉네임 중복 체크 & 유효성 체크
  const [ userNickname, setUserNickname ] = useState();

  const [nickname, setNickname] = useState('')
  const [nicknameMessage, setNicknameMessage] = useState('')
  const [isNickname, setIsNickname] = useState(false)
  
  const onChangeNickname = (e) => {
    setUserNickname(e.target.value);
    setNickname(e.target.value);
    if (nickname.length < 2 || nickname.length > 15) {
      setNicknameMessage('2글자 이상 15글자 미만으로 입력해주세요.')
      setIsNickname(false)
    } else {
      setNicknameMessage('올바른 닉네임 형식입니다 :)')
      setIsNickname(true)
    }
  }

  const onCheckDuplicate = (e) => {
    axios.get(`http://i6c109.p.ssafy.io:8050/user/${userNickname}`)
    .then(res => {
      // console.log(res.data[0])
      if (res.data[0] !== undefined) {
        alert('다른 사용자가 사용하고 있는 닉네임입니다.')
      } else {
        alert('사용하실 수 있는 닉네임입니다.')
      }
    })
  }
  
  //비밀번호 수정 버튼
  const [ changePassword, setChangePassword] = useState();
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  // const userId = userInfo[0].id;
  
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 :)')
      setIsPassword(true)
    }
  }

  // 아이디, 이메일 정보 얻어오기
  const { nick } = useParams();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = React.useState('');
  
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 :)')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요')
        setIsPasswordConfirm(false)
      }
  }

  const [ changeInfo, setChangeInfo ] = useState();
  const [ userIntro, setUserIntro ] = useState();
  const [ intro, setIntro ] = useState();

  React.useEffect(() => {
    axios.get(`http://i6c109.p.ssafy.io:8000/user/${nick}`)
      .then(res => {
        setUserInfo(res.data);
        setLoading(false);
        setUserIntro(res.data[0].intro);
      })
  }, []);

  // console.log(userInfo)
  const onSubmitPassword = (e) => {
    // console.log(userInfo)
    const currentId = userInfo[0].id;
      axios.put(`http://i6c109.p.ssafy.io:8000/user/${currentId}`, {
        "id" : userInfo[0].id,
        "password" : password,
        "email" : userInfo[0].email,
        "intro" : "안녕!",
        "nickname" : userInfo[0].nickname
      })  
      .then(console.log(userInfo))
  }

  // console.log(userInfo)
  
  // 수정 버튼
  const onChangeIntro = (e) => {
    setIntro(e.target.value)
  }
  console.log(userInfo)
  const onChangeInfo = () => {
    const currentId = userInfo[0].id;
    axios.put(`http://i6c109.p.ssafy.io:8000/user/${currentId}`, {
      "id" : userInfo[0].id,
      "nickname" : nickname,
      "intro" : intro
    })
  }
  // console.log(nickname, intro)

  return (
    <div>
      {loading ? null : (
        <div>
          <NavBar></NavBar>
          <CssBaseline />
          <Container maxwidth="lg" sx={{ mt: 13 }}>
            <h2>회원 정보 수정</h2>
            <Grid container>
              <Grid item xs={3}>
                <AccountCircleIcon sx={{ fontSize: 150 }} />
                <label htmlFor="upload-button">
                  <Input
                    accept="image/*"
                    id="upload-button"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span" sx={{ mt: 3 }}>
                    프로필 이미지 변경
                  </Button>
                </label>
              </Grid>
              <Grid item xs={9}>
                <Stack direction="row" sx={{ mt: 2 }}>
                  <Typography>아이디</Typography>
                  <Typography sx={{ ml: "13ch", fontWeight: "bold", mb: 2 }}>
                    {userInfo[0].id}
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ mt: 2 }}>
                  <Typography>이메일</Typography>
                  <Typography sx={{ ml: "13ch", fontWeight: "bold", mb: 2 }}>
                    {userInfo[0].email}
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ mt: 2 }}>
                  <Typography sx={{ mr: 2, width: 150 }}>소개글</Typography>
                  <TextField
                    onChange={onChangeIntro}
                    onKeyUp={onKeyUp}
                    sx={{ width: "50ch" }}
                    multiline
                  />
                  <Typography sx={{ m: 2 }}> {textLength} / 150</Typography>
                </Stack>
                <Stack direction="row" sx={{ mt: 2 }}>
                  <Typography sx={{ mr: 2, width: 150 }}>닉네임</Typography>
                  <Stack>
                    <TextField
                      onChange={onChangeNickname}
                      sx={{ width: "50ch" }}
                    >
                      {userInfo[0].nickname}
                    </TextField>
                    <div style={spanStyle}>
                      {nickname.length > 0 && (
                        <span
                          className={`message ${
                            isNickname ? "success" : "error"
                          }`}
                        >
                          {nicknameMessage}
                        </span>
                      )}
                    </div>
                  </Stack>
                  <Button
                    variant="contained"
                    onClick={onCheckDuplicate}
                    sx={{ ml: 2, width: "16ch" }}
                  >
                    중복 확인
                  </Button>
                </Stack>
                <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
                <Box>

                  <Stack direction="row" sx={{ mt: 2 }}>
                    <Typography sx={{ mr: 2, width: 150 }}>비밀번호</Typography>
                    <Stack>
                      <TextField
                        onChange={onChangePassword}
                        sx={{ width: "50ch" }}
                        placeholder="비밀번호 수정을 원할 시에만 입력하세요."
                        type="password"
                      />
                      <div style={spanStyle}>
                        {password.length > 0 && (
                          <span
                            className={`message ${
                              isPassword ? "success" : "error"
                            }`}
                          >
                            {passwordMessage}
                          </span>
                        )}
                      </div>
                    </Stack>
                  </Stack>
                  <Stack direction="row" sx={{ mt: 2 }}>
                    <Typography sx={{ mr: 2, width: 150 }}>
                      비밀번호 확인
                    </Typography>
                    <Stack>
                      <TextField
                        sx={{ width: "50ch" }}
                        onChange={onChangePasswordConfirm}
                        type="password"
                      />
                      <div style={spanStyle}>
                        {passwordConfirm.length > 0 && (
                          <span
                            className={`message ${
                              isPasswordConfirm ? "success" : "error"
                            }`}
                          >
                            {passwordConfirmMessage}
                          </span>
                        )}
                      </div>
                    </Stack>
                    <Button
                      variant="contained"
                      sx={{ ml: 2 }}
                      onClick={onSubmitPassword}
                    >
                      비밀번호 수정
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={onChangeInfo}
                  variant="contained"
                  sx={{ width: 200, mt: 3 }}
                  color="success"
                >
                  수정 완료
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </div>
  );
}