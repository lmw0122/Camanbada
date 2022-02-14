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
  
  const onChange = (e) => {
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
  

  // 아이디, 이메일 정보 얻어오기
  const [loading, setLoading] = useState(true);
  const { nick } = useParams();
  
  const [userInfo, setUserInfo] = React.useState('');



  React.useEffect(() => {
    axios.get(`http://i6c109.p.ssafy.io:8050/user/${nick}`)
      .then(res => {
        setUserInfo(res.data);
        setLoading(false);
      })
  }, []);
  
  


  return (
    <div>
      {loading ?
        null : 
        <div>
        <NavBar></NavBar>
        <CssBaseline />
        <Container maxwidth="lg" sx={{ mt: 13 }}>
          <h2>회원 정보 수정</h2>
          <Grid container>
            <Grid item xs={3}>
              <AccountCircleIcon sx={{ fontSize: 150 }} />
              <label htmlFor="upload-button">
                <Input accept="image/*" id="upload-button" multiple type="file" />
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
                <TextField onKeyUp={onKeyUp} sx={{ width: "50ch" }} multiline />
                <Typography sx={{ m: 2 }}> {textLength} / 150</Typography>
              </Stack>
              <Stack direction="row" sx={{ mt: 2 }}>
                <Typography sx={{ mr: 2, width: 150 }}>닉네임</Typography>
                <Stack>
                  <TextField
                    onChange={onChange}
                    sx={{ width: "50ch" }}
                  ></TextField>
                  <div style={spanStyle}>
                    {nickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>}
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
              <Stack direction="row" sx={{ mt: 2 }}>
                <Typography sx={{ mr: 2, width: 150 }}>비밀번호</Typography>
                <TextField
                  sx={{ width: "50ch" }}
                  placeholder="비밀번호 수정을 원할 시에만 입력하세요."
                />
              </Stack>
              <Stack direction="row" sx={{ mt: 2 }}>
                <Typography sx={{ mr: 2, width: 150 }}>비밀번호 확인</Typography>
                <TextField sx={{ width: "50ch" }} />
                <Button variant="contained" sx={{ ml: 2 }}>
                  비밀번호 수정
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Button
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
    }
    </div>
  );
}