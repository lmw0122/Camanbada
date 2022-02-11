import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Container, TextField, Box, CssBaseline, Typography, Stack, Button } from '@mui/material';
import NavBar from '../../components/common/NavBar'
import Editor from '../../components/board/Editor'
import RadioButtonCamping from '../../components/board/RadioButtonCamping'
import CampingSearch from '../../components/camping/CampingSearch';


export default function Create() {
  const [campId, setCampId] = useState('')
  const [tag, setTag] = useState('')
  const [campingName, setCampingName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [clientId, setClientId] = useState(''); 
  const [photo, setPhoto] = useState('');
  const HEADER = {
    'Authorization': localStorage.getItem("accessToken")
  }
  // const QuillRef = ReactQuill();
  // const [contents, setContents] = useState("");

  const onSubmit = (e) => {
    console.log(tag + " " + campingName + " " + title + " " + content + " " + clientId + " " + photo);
    e.preventDefault();
    console.log(e)
    axios.post('http://i6c109.p.ssafy.io:8051/board', {
      tag : tag,
      campingName : campingName,
      title : title,
      content : content
    })
    .then((res) => {
      console.log(res)
    })
    // axios.post('http://i6c109.p.ssafy.io:8051/board', {
    //   "campId": "1",
    //   "clientId": "작성자",
    //   // "photo": "string",
    //   "content": content,
    //   "tag": tag,
    //   "title": title
    // },HEADER)
    // .then((res) => {
    //   console.log(res)
    // })
  }

  //태그 받아오기
  const tag_camp_data = (data) => {
    console.log(data);
    setTag(data);
  }
  
  const tag_commnunity_data = (data) => {
    console.log(data);
    setTag(data);
  }
  
  //캠핑 데이터 받아오기
  const camping_data = (data) => {
    console.log(data);
    setCampingName(data);
  }
  
  //제목 데이터 받아오기
  const title_data = (data) => {
    console.log(data.target.value);
    setTitle(data.target.value);
  }

  //작성자 이름 데이터 받아오기
  const name_data = (data) => {
    console.log(data.target.value);
    setClientId(data.target.value);
  }

  //내용 받아오기
  const content_data = (data) => {
    console.log(data);
    setContent(data);
  }
  //사진 받아오기
  const image_data = (data) => {
    console.log(data);
    setPhoto(data);
  }

  return (
    <div>
      <NavBar></NavBar>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt : 13}}>
        <Box sx={{ height : '700', border : '5px solid black', m : 5, py : 10, px : 10 }}>
          <Stack spacing={2} >
            <RadioButtonCamping
              func1={tag_camp_data}
              func2={tag_commnunity_data}
            ></RadioButtonCamping>
          </Stack>
          <CampingSearch
          func={camping_data}
          ></CampingSearch>
          <Box sx={{ width: 500, maxWidth: "100%", mt : 2}}>
            <TextField
              onChange={title_data}  
              fullWidth
              required
              label="제목을 입력해주세요"
            />
          </Box>
          <Box sx={{ width: 500, maxWidth: "100%", mt : 2}}>
            <TextField 
              onChange={name_data}
              fullWidth
              required
              label="작성자 이름을 입력해주세요"
            />
          </Box>
          <Editor
            func1={content_data}
            func2={ image_data }
          ></Editor>
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
              onClick={onSubmit}
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