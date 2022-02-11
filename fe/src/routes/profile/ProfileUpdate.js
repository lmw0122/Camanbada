import * as React from 'react';
import { Container, CssBaseline, Typography, Grid, TextField, Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from '../components/common/NavBar'

const Input = styled('input')({
  display: 'none',
});

export default function Update() {
    // const onEdit = () => {
    
    // }
  
  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxwidth="lg" sx={{ mt : 13 }}>
        <h2>회원 정보 수정</h2>
        <Grid container>
          <Grid item xs={3} >
            <AccountCircleIcon sx={{ fontSize: 150 }}/>
            <label htmlFor="upload-button">
              <Input accept="image/*" id="upload-button" multiple type="file" />
              <Button
                variant="contained"
                component="span"
                sx={{ mt : 3 }}
              >
                프로필 이미지 변경
              </Button>
            </label>
          </Grid>
          <Grid item xs={9}>
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography>아이디</Typography>
              <Typography sx={{ ml : '13ch', fontWeight: 'bold', mb : 2}}>사용자 아이디</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography >이메일</Typography>
              <Typography sx={{ ml : '13ch', fontWeight: 'bold', mb : 2}}>사용자 이메일</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography sx={{ mr : 2, width : 150 }}>소개글</Typography>
              <TextField sx={{ width : '50ch' }} multiline />
              <Typography sx={{ m : 2}}>0 / 150</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography sx={{ mr : 2, width : 150 }}>닉네임</Typography>
              <TextField sx={{ width : '50ch' }}/>
              <Button variant="contained" sx={{ ml : 2, width : '16ch' }}>중복 확인</Button>
            </Stack>
            <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography sx={{ mr : 2, width : 150 }}>비밀번호</Typography>
              <TextField sx={{ width : '50ch' }}/>
            </Stack>
            <Stack direction="row" sx={{ mt : 2}}>
              <Typography sx={{ mr : 2, width : 150 }}>비밀번호 확인</Typography>
              <TextField sx={{ width : '50ch' }}/>
              <Button variant="contained" sx={{ ml : 2}}>비밀번호 수정</Button>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ justifyContent: "center" }}>
          <Button variant="contained" >수정 완료</Button>
        </Box>
      </Container>
    </div>
  )
}