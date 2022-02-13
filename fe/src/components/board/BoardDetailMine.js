import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const theme = createTheme();


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BoardDetailMine() {
  const { boardId } = useParams();
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] =  useState([]);

  const BOARD_GET_URL = `http://i6c109.p.ssafy.io:8051/board/one/${boardId}`;
  const BOARD_DELETE_URL = `http://localhost:8051/board/${boardId}`;

  const COMMENT_GET_URL = `http://i6c109.p.ssafy.io:8051/comment/${boardId}`;
  const COMMENT_CREATE_URL = `http://localhost:8051/comment`;
  
  const HOME_TEST_URL = "http://localhost:3000/community";

  const accessToken = localStorage.getItem("accessToken");
  const HEADER = {
    headers:{
    'Authorization': accessToken
    }
  }

  //게시판 가져오기
  const getBoards = async () => {
    axios.get(BOARD_GET_URL)
      .then((response) => {
        setDataList(response.data);
        const onePhoto = response.data.photo;
        if(onePhoto != "")
          document.getElementById('userImage').setAttribute("src",onePhoto);
        const oneContent = response.data.content;
        document.getElementById("boardcontent").innerHTML = oneContent;
      }).catch((error) => {
        //에러처리
        alert("게시판이 비어있습니다");
      });
  };
  //댓글 가져오기
  const getComments = async () => {
    axios.get(COMMENT_GET_URL)
      .then((response) => {
        setComments(response.data);
      }).catch((error) => {
        //에러처리
        alert("댓글이 없습니다");
      });
  };
  

  //게시판 지우기
  const deleteOneBoard = () => {
    axios.delete(BOARD_DELETE_URL)
      .then((response) => {
        window.location.href = (HOME_TEST_URL);
      }).catch((error) => {

        alert("지울 수 없는 게시물입니다");
      });
  }

  //댓글 작성하기
  const createOneComment = () => {
    const oneContent = document.getElementById("newComment");
    axios.post(COMMENT_CREATE_URL, {
      "boardId": boardId,
      "clientId": "현재 로그인한 사용자",
      "content": oneContent.value
    })
      .then((response) => {
        getComments();
      }).catch((error) => {
        alert("댓글 작성에 실패하였습니다");
      });
  }

  useEffect(() => {
    getBoards(); getComments();
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ p:0, mt: 12, mb: 8}} maxWidth="md">
          <Typography sx={{ mb: 1 }}>
            {dataList.tag}
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {dataList.title}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              mb: 2
            }}
          >
            <Grid>
              <AccountCircleIcon  sx={{ fontSize: 60 }} />
            </Grid>
            <Grid>
              <Typography>
                {dataList.clientId}
              </Typography>
              <Typography>
                {dataList.date}
              </Typography>
            </Grid>
            <Grid>
              좋아요 {dataList.like}
            </Grid>
          </Stack>
          <img id="userImage" width="850"></img>
          <Box sx={{ mb: 2, height: 400 }} id="boardcontent">
          </Box>
          <Divider sx={{ borderBottomWidth: 5, mb: 2 }} />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Grid>
              <FavoriteBorderIcon />
            </Grid>
            <Grid>
              좋아요 {dataList.like}
            </Grid>
            <Grid>
              <ChatBubbleOutlineIcon />
            </Grid>
            <Grid>
              댓글 {comments.length}
            </Grid>
          </Stack>
          <Divider sx={{ borderBottomWidth: 5, mb: 2 }} />
          {/* 댓글 출력 부분 */}
          <Stack
            direction="column"
          >
            {comments.map((comment) => (
              <Grid item key={comment}>
                <Grid>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {comment.clientId}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography>
                    {comment.content}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography>
                    {comment.date}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography>
                    좋아요 수 : {comment.like}
                  </Typography>
                </Grid>
              </Grid>
            ))}           
          </Stack>
          <Stack
            direction="row"
            sx={{
              mb: 2,
            }}

          >
            <Input
              placeholder="댓글을 남겨보세요."
              id = "newComment"
            >
            </Input>
            <Button
              type="submit"
              sx={{
                m: 1,
                minWidth: 70,
                height: '6ch'
              }}
              variant="contained"
              onClick={ createOneComment }
            >
              등록
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="right"
          >
            <Item>
              <Link to={`/board/update/${boardId}`} style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                >
                  게시글 수정
                </Button>
              </Link>
            </Item>
            <Item>
              <Button 
                style={{
                  backgroundColor: "#f44336"
                }}
                variant="contained"
                onClick={deleteOneBoard}
              >
                게시글 삭제
              </Button>
            </Item>
          </Stack>
        
          
        </Container>
      </main>
    </ThemeProvider>

  );
}
