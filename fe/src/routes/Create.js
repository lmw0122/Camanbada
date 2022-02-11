import React, { useCallback, useState } from 'react';
import NavBar from '../components/NavBar'
import Editor from '../components/Editor'
import RadioButtonCamping from '../components/RadioButtonCamping'
import CampingSearch from '../components/CampingSearch';
import { Container, TextField, Box, CssBaseline, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function Create() {
  const [tag, setTag] = useState('')
  const [campingName, setCampingName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // const QuillRef = ReactQuill();
  // const [contents, setContents] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    axios.post('i6c109.p.ssafy.io:8051/board', {
      tag : tag,
      campingName : campingName,
      title : title,
      content : content
    })
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt : 13}}>
        <Box sx={{ height : '700', border : '5px solid black', m : 5, py : 10, px : 10 }}>
          <Stack spacing={2} >
            <RadioButtonCamping ></RadioButtonCamping>
          </Stack>
          <CampingSearch ></CampingSearch>
          <Box sx={{ width: 500, maxWidth: "100%", mt : 2}}>
            <TextField 
              fullWidth
              required
              label="제목을 입력해주세요"
            />
          </Box>
          <Editor></Editor>
          {/* <Box sx={{ width : 500, maxwidth: "100%", mt : 2 }}>
            <TextField
              label="내용을 입력해주세요."
              required
              fullWidth
              multiline
              minRows={7}
            />
          </Box> */}
          <Typography align="right" sx={{ mr : 3}}>
            <Button
              // onSubmit={onSubmit}
              type="submit" 
              variant="contained" 
              sx={{ mt : 2 }}
            >
              작성 완료
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  )
}