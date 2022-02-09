import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from "../components/Copyright";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import camping1 from "../img/campingImg/camping1.jpg";
import camping2 from "../img/campingImg/camping2.jpg";
import camping3 from "../img/campingImg/camping3.jpg";
import camping4 from "../img/campingImg/camping4.jpg";
import camping5 from "../img/campingImg/camping5.jpg";
import Auth from "../components/Auth";
import Stack from '@mui/material/Stack';
import Logo from "../img/logo.png";

const theme = createTheme();

const imgArray = new Array();
imgArray[0] = camping1;
imgArray[1] = camping2;
imgArray[2] = camping3;
imgArray[3] = camping4;
imgArray[4] = camping5;

const imgNum = Math.round(Math.random()*4);




export default function SignInSide() {
  const REST_API_KEY = "62d89027fc4602266f22c5f9f2386dcf";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage:  `url(${imgArray[imgNum]})` ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{ height: 80, mb: 2 }}
              alt="logo"
              src={Logo}
                    
            >
            </Box>
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            {/* <Typography component="h1" variant="h5">
              Login
            </Typography> */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="id"
                label="아이디"
                name="id"
                autoComplete="id"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Stack
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained" 
                  sx={{ mt: 3, mb: 2, width: 222, height: 54, }}
                >
                  LOGIN
                </Button>
              </Stack>
              <Typography align="center" sx={{ mb: 2, }}>
                또는
              </Typography>
              <Stack align="center">
                <a id="reauthenticate-popup-btn" href={KAKAO_AUTH_URL}>
                  <img
                    src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                    width="222"
                    alt="카카오 로그인 버튼"
                  />
                </a>
                <p id="reauthenticate-popup-result"></p>
              </Stack>
            
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SOCIAL LOGIN
              </Button> */}
              <Grid container alignItems="center" justifyContent="center">
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/Signup" variant="body2">
                    아이디가 없으신가요? 회원가입하러 가기!
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}