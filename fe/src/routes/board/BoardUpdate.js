import * as React from 'react';
import NavBar from '../components/common/NavBar'
import RadioButtonCamping from '../components/board/RadioButtonCamping'
import CampingSearch from '../components/camping/CampingSearch';
import ImageUpload from '../components/ImageUpload'
import { Container, TextField, Box, CssBaseline, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BoardUpdate() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
    const handleSubmit = (event) => {
      console.log(event.currentTarget)
    }
  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt : 13}}>
        <Box sx={{ height : '700', border : '5px solid black', m : 5, py : 10, px : 15 }}>
          <Stack spacing={2} >
            <RadioButtonCamping></RadioButtonCamping>
          </Stack>
          <CampingSearch></CampingSearch>
          <Box sx={{ width: 500, maxWidth: "100%", mt : 2}}>
            <TextField 
              fullWidth
              required
              label="제목을 입력해주세요"
            />
          </Box>
          <ImageUpload></ImageUpload>
          <Box sx={{ width : 500, maxwidth: "100%", mt : 2 }}>
            <TextField
              label="내용을 입력해주세요."
              required
              fullWidth
              multiline
              minRows={7}
            />
          </Box>
          <Typography align="right" onSubmit={handleSubmit} sx={{ mr : 3}}>
            <Button
              type="submit" 
              variant="contained" 
              sx={{ mt : 2 }}
            >
              수정 완료
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  )
}