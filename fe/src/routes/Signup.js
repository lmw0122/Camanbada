import React, { useState, useCallback } from 'react';
import axios from 'axios'
import Copyright from "../components/Copyright";
import Logo from "../img/logo.png";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp() {
  //아이디, 닉네임, 이메일, 비밀번호, 비밀번호 확인 초기 상태값 선언
  const [id, setId] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState('')
  const [nicknameMessage, setnNicknameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

  // 유효성 검사
  const [isId, setIsId] = useState(false)
  const [isNickname, setIsNickname] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await axios
          .post('http://i6c109.p.ssafy.io:3000/signup', {
            id: id,
            password: password,
            passwordConfirm : passwordConfirm,
            nickname : nickname,
            email: email,
          })
          .then((res) => {
            console.log('response:', res)
            if (res.status === 200) {
              <Link to="/signup"></Link>
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [email, id, password]
  )

  // 아이디
  const onChangeName = useCallback((e) => {
    setId(e.target.value)
    if (e.target.value.length < 5 || e.target.value.length > 15) {
      setIdMessage('5글자 이상 15글자 미만으로 입력해주세요.')
      setIsId(false)
    } else {
      setIdMessage('올바른 이름 형식입니다 :)')
      setIsId(true)
    }
  }, [])

   // 닉네임
   const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 15) {
      setnNicknameMessage('2글자 이상 15글자 미만으로 입력해주세요.')
      setNickname(false)
    } else {
      setnNicknameMessage('올바른 이름 형식입니다 :)')
      setNickname(true)
    }
  }, [])

   // 이메일
   const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 :)')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e) => {
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
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 :)')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )

  // 이메일 인증 팝업
  // const onClickEmailButton = () => {
    
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
              component="img"
              sx={{ height: 100, mt : 3, ml : 5 }}
              alt="logo"
              src={Logo}      
        ></Box>
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar xs={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{mb: 6, mt : 2}}>
            Sign up
          </Typography>
          <Box component="form" noValidate xs={{ mt: 3 }} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <TextField
                  onChange={onChangeName}
                  autoComplete="given-name"
                  name="id"
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  autoFocus
                />
                {id.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" size="large" sx={{ width : 126, height : 55 }}>중복 확인</Button>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={onChangePassword}
                  required
                  fullWidth
                  name="password"
                  label="비밀번호 (숫자 + 영문자 + 특수문자 조합으로 8자리 이상)"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={onChangePasswordConfirm}
                  required
                  fullWidth
                  name="password-Confirmation"
                  label="비밀번호확인"
                  type="password"
                  id="password-Confirmation"
                  autoComplete="new-password"
                />
                {passwordConfirm.length > 0 && (<span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>)}
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={onChangeNickname}
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임"
                  name="nickname"
                  autoComplete="email"
                />
                {nickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>}
              </Grid>
              <Grid item xs={3} >
                <Button variant="contained" size="large" sx={{ width : 126, height: 55 }}>중복 확인</Button>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={onChangeEmail}  
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                />
                {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
              </Grid>
              <Grid item xs={3} >
                <Button variant="contained" size="large" sx={{ width : 126, height: 55 }}>이메일 인증</Button>
              </Grid>
            </Grid>
            {/* 위의 유효성 검사가 성립된다면 버튼 활성화 */}
            <Button
              type="submit"
              disabled={!(isId && isEmail && isPassword && isPasswordConfirm)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1, height : 55 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  계정이 이미 있으신가요?? 로그인하러 가기!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}