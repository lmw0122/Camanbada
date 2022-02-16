import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios'
import { Link } from "react-router-dom";

const theme = createTheme();

export default function NewsFeed() {
  const [boardList, setBoardList] = useState([]);
  const [followBoardList, setFollowBoardList] = useState([]);

  const accessToken = localStorage.getItem("accessToken");
  const HEADER = {
    headers: {
      'Authorization': accessToken
    }
  }

  const BOARD_GET_URL = 'http://i6c109.p.ssafy.io:8000/board';
  const BOARD_FOLLOW_URL = 'http://i6c109.p.ssafy.io:8000/board/follow';

  const FOLLOW_USER_URL = 'http://i6c109.p.ssafy.io:8000/follow/';  

  const ID_GET_URL = 'http://i6c109.p.ssafy.io:8000/user';

  //현재 로그인한 사용자 아이디 가져오기
  const getId = async () => {
    axios.get(ID_GET_URL, HEADER)
      .then((response) => {
        getFollower();
      }).catch((err) => {
        console.log(err);
        alert("로그인이 필요합니다");
      });
  }

  //모든 게시판 가져오기
  const getBoard = async () => {
    axios.get(BOARD_GET_URL, HEADER)
      .then((response) => {
        setBoardList(response.data);
      }).catch((err) => {
        alert("게시물이 아예 없습니다");
      });
  }

  //팔로워 불러오기
  function getFollower() {
    const URL = FOLLOW_USER_URL + "follower";
    axios.get(URL, HEADER)
      .then((response) => {
        getFollowBoards(response.data);
      }).catch((error) => {
        //팔로워가 없어요
        alert("팔로우가 없어요");
      });
  }
  
   //팔로우 유저 게시판 불러오기
  function getFollowBoards(follower) {
    let followUserList = [];
    follower.forEach(user => { followUserList.push(user.following) });
    axios.post(BOARD_FOLLOW_URL,followUserList,HEADER)
      .then((response) => {
        console.log(response.data);
        if (response.data == "") {
          alert("게시판이 비어있습니다");
        } else {
          setFollowBoardList(response.data);
          console.log(followBoardList);
          // response.data.forEach(board=>boardList.push(board));
        }
      }).catch((error) => {
        alert("팔로우 사용자를 찾을 수 없습니다");
      });
  }

  useEffect(() => {
    getId(); getBoard();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 2,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                pt: 1,
                fontWeight: 'bold',
              }}
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
            >
              뉴스피드
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 0, mb:8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {followBoardList.map((board, idx) => (idx < 3 &&
              <Grid item key={board} xs={12} sm={6} md={4}>
                <Link to={`/board/${board.boardId}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />
                    }
                    title={board.title}
                    subheader={board.date}
                />
                {board.photo != "" &&
                  <CardMedia
                    component="img"
                    height="194"
                    image={board.photo}
                    alt="없음"
                    />}
                  <CardContent>
                  <Typography variant="body2" color="text.secondary">
                        {board.photo == "" && board.content.length > 140 &&
                          <div style={{ height: 322 }}><h2 >더 보기</h2></div>
                        }
                        {board.photo != "" && board.content.length > 140 &&
                          <div style={{ height: 128 }}><h2 >더 보기</h2></div>
                        }
                        {board.photo == "" && board.content.length <= 100 &&
                          <div dangerouslySetInnerHTML={{ __html: board.content }} style={{ height: 345 }}></div>
                        }
                        {board.photo != "" && board.content.length <= 100 &&
                          <div dangerouslySetInnerHTML={{ __html: board.content }} style={{ height: 151 }}></div>
                        }
                    </Typography>
                    </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" color="warning">
                      <FavoriteIcon />
                      <Typography>
                        {board.like}
                      </Typography>
                    </IconButton>
                  </CardActions>
                </Card>         
                </Link>
                </Grid>
            ))}
            {boardList.map((board, idx) => (idx < 3 &&
              <Grid item key={board} xs={12} sm={6} md={4}>
              <Link to={`/board/${board.boardId}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ maxWidth: 345, maxHight: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />
                  }
                  title={board.title}
                  subheader={board.date}
              />
              {board.photo != "" &&
                <CardMedia
                  component="img"
                  height="194"
                  image={board.photo}
                  alt="없음"
                  />}
                <CardContent>
                      <Typography variant="body1" color="text.secondary">
                        {board.photo == "" && board.content.length > 140 &&
                          <div style={{ height: 322 }}><h2 >더 보기</h2></div>
                        }
                        {board.photo != "" && board.content.length > 140 &&
                          <div style={{ height: 128 }}><h2 >더 보기</h2></div>
                        }
                        {board.photo == "" && board.content.length <= 100 &&
                          <div dangerouslySetInnerHTML={{ __html: board.content }} style={{ height: 345 }}></div>
                        }
                        {board.photo != "" && board.content.length <= 100 &&
                          <div dangerouslySetInnerHTML={{ __html: board.content }} style={{ height: 151 }}></div>
                        }
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" color="warning">
                    <FavoriteIcon />
                    <Typography>
                      {board.like}
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>         
              </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
    
    
  );
}
