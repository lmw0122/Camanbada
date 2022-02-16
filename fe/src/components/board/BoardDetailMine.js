import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Box, CssBaseline, Typography, Grid, Stack, Button, Divider, Input, Paper, IconButton } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
// import StickyFooter from "../../components/common/Footer";

const theme = createTheme();


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BoardDetailMine() {
  const { boardId } = useParams();

  const [allCommentLike, setAllCommentLike] = useState([]);
  const [clientId, setClientId] = useState([]);
  const [boardUserId, setBoardUserId] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [comments, setComments] = useState([]);

  const ID_GET_URL = 'http://i6c109.p.ssafy.io:8000/user'

  const BOARD_GET_URL = `http://i6c109.p.ssafy.io:8051/board/one/${boardId}`;
  const BOARD_DELETE_URL = `http://i6c109.p.ssafy.io:8000/board/${boardId}`;
  const BOARD_ONE_LIKE_URL = `http://i6c109.p.ssafy.io:8000/like/board/`

  const COMMENT_GET_URL = `http://i6c109.p.ssafy.io:8051/comment/${boardId}`;
  const COMMENT_CREATE_URL = `http://i6c109.p.ssafy.io:8000/comment`;
  const COMMENT_DELETE_URL = `http://i6c109.p.ssafy.io:8000/comment/`;
  const COMMENT_ONE_LIKE_URL = `http://i6c109.p.ssafy.io:8000/like/comment/`
  
  const HOME_TEST_URL = "http://localhost:3000/community";
  const PROFILE_MOVE_URL = "http://localhost:3000/profile/"

  const accessToken = localStorage.getItem("accessToken");
  const HEADER = {
    headers: {
      'Authorization': accessToken
    }
  }

  //게시판 가져오기
  const getBoards = async () => {
    axios.get(BOARD_GET_URL)
      .then((response) => {
        setBoardUserId(response.data.clientId);
        setDataList(response.data);
        const onePhoto = response.data.photo;
        if (onePhoto != "") {
          document.getElementById('userImage').setAttribute("src", onePhoto);
        }
        const oneContent = response.data.content;
      }).catch((error) => {
        //에러처리
        alert("게시판이 비어있습니다");
      });
  };
  //댓글 가져오기
  const getComments = async () => {
    axios.get(COMMENT_GET_URL)
      .then((response) => {
        let allLike = 0;
        response.data.forEach(oneComment => {
          allLike += oneComment.like;
        });
        setComments(response.data);
        setAllCommentLike(allLike);
      }).catch((error) => {
        //에러처리
        alert("댓글이 없습니다");
      });
  };

  //현재 로그인한 사용자 아이디 가져오기
  const getId = async () => {
    axios.get(ID_GET_URL, HEADER)
      .then((response) => {
        setClientId(response.data);
      }).catch((error) => {
        //에러처리
        alert("댓글이 없습니다");
      });
  }
  

  //게시판 지우기
  const deleteOneBoard = () => {
    axios.delete(BOARD_DELETE_URL, HEADER)
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
      "clientId": clientId,
      "content": oneContent.value
    }, HEADER)
      .then((response) => {
        getComments();
      }).catch((error) => {
        alert("댓글 작성에 실패하였습니다");
      });
  }
  
  //댓글 지우기
  const deleteOneComment = (e, comment) => {
    const URL = COMMENT_DELETE_URL + comment.commentId;
    axios.delete(URL, HEADER)
      .then((response) => {
        getComments();
      }).catch((error) => {
        alert("댓글 제거에 실패하였습니다");
      });
  }

  //  //댓글 수정하기
  //  const updateOneComment = (e, comment) => {
  //    axios.put(COMMENT_CREATE_URL, {
  //     "boardId": 0,
  //     "clientId": "string",
  //     "commentId": 0,
  //     "content": "string",       
  //    }, HEADER)
  //     .then((response) => {
        
  //     }).catch((error) => {
  //       alert("댓글 수정에 실패하였습니다");
  //     });
  // }


  //댓글 좋아요와 싫어요
  const [ likeComment, setLikeComment ] = useState(false);
  const commentOneLike= (e, commentId) =>{{
    const URL = COMMENT_ONE_LIKE_URL + commentId;
    axios.get(URL,HEADER)
      .then((response) => {
        if (response.status === 204) {
          axios.delete(URL, HEADER)
            .then((response) => {
              getComments();
              setLikeComment(false)
          }).catch((error) => {
            alert("싫어요에 실패하였습니다");
          });
        }
        else {//좋아요 성공
          getComments();
          setLikeComment(true)
        }
      }).catch((error) => {
        alert("좋아요에 실패하였습니다");
      });
  };
}

  //게시판 좋아요와 싫어요 & 아이콘 변경
  const [ like, setLike ] = useState(false);
  const boardOneLike = (e, boardId) => {{
    const URL = BOARD_ONE_LIKE_URL + boardId;
    axios.get(URL,HEADER)
      .then((response) => {
        if (response.status === 204) {
          axios.delete(URL, HEADER)
            .then((response) => {
              getBoards();
              setLike(false)
          }).catch((error) => {
            alert("싫어요에 실패하였습니다");
          });
        }
        else {//좋아요 성공
          getBoards();
          setLike(true)
        }
      }).catch((error) => {
        alert("좋아요에 실패하였습니다");
      });
  };
  }
  
  function goProfile(e, id) {
    window.location.href = PROFILE_MOVE_URL + id;
  }
  
  useEffect(() => {
    getBoards(); getComments(); getId();
  }, [])
  
  const content = dataList.content
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ p:0, mt: 12, mb: 8}} maxWidth="md">
          <Typography sx={{ mb: 1 }}>
            &#60;{dataList.tag}&#62;
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
              <AccountCircleIcon
                sx={{ fontSize: 60 }}
                onClick={(e)=>{goProfile(e, boardUserId)}}
              />
            </Grid>
            <Grid>
              <Stack direction='row' alignItems="center">
                <Typography>
                  {dataList.clientId}
                </Typography>
                  { like ? <FavoriteIcon onClick={(e)=>{boardOneLike(e, dataList.boardId)}} sx={{ fontSize : 20, mx : 1, color : '#f44336'}}/> 
                  : <FavoriteBorderIcon onClick={(e)=>{boardOneLike(e, dataList.boardId)}} sx={{ fontSize : 20, mx : 1, color : '#f44336'}}/> }
                <Typography >
                  {dataList.like}
                </Typography>
              </Stack>
              <Typography>
                {Date(dataList.date)}
              </Typography>

            </Grid>
          </Stack>

            <img id="userImage" width="850" />
          <Box sx={{ mb: 2 }} >
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            {/* {dataList.content.innerText} */}
            
          </Box>
          <Divider sx={{ borderBottomWidth: 5, mb : 1 }} />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Grid>
              <Stack direction='row' alignItems="center">
                { like ? <FavoriteIcon onClick={(e)=>{boardOneLike(e, dataList.boardId)}} sx={{ fontSize : 25, mx : 1, color : '#f44336'}}/> 
                : <FavoriteBorderIcon onClick={(e)=>{boardOneLike(e, dataList.boardId)}} sx={{ fontSize : 25, mx : 1, color : '#f44336'}}/> }
                <Typography >
                  {dataList.like}
                </Typography>
                <Grid>
                  <ChatBubbleOutlineIcon sx={{ fontSize : 21
                    , mx : 1}}/>
                </Grid>
                <Grid>
                  댓글 {comments.length}
                </Grid>
              </Stack>
            </Grid>
          </Stack>
          <Divider sx={{ borderBottomWidth: 5, my: 1 }} />
          {/* 댓글 출력 부분 */}
          <Stack
            direction="column"
          >
            {comments.map((comment) => (
              <Grid item key={comment}>
                <Grid>
                  <Stack direction="row" alignItems="center">
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {comment.clientId}
                    </Typography>
                    { likeComment ? <FavoriteIcon onClick={(e)=>{commentOneLike(e, comment.commentId)}} sx={{ fontSize : 25, mx : 1, color : '#f44336'}}/> 
                    : <FavoriteBorderIcon onClick={(e)=>{commentOneLike(e, comment.commentId)}} sx={{ fontSize : 25, mx : 1, color : '#f44336'}}/> }
                    <Typography >
                      {comment.like}
                    </Typography>
                    <Grid sx={{ ml : 1}}>
                      <IconButton>
                        {clientId === comment.clientId &&
                          <DeleteIcon onClick={(e)=>{deleteOneComment(e, comment)}} sx={{ color : '#f44336' }}/>
                          // <Button variant="outlined" style={{ backgroundColor : "#f44336"}}
                          //   onClick={(e)=>{deleteOneComment(e, comment)}}
                          // >
                          // 삭제
                          // </Button>
                          }
                      </IconButton>
                    </Grid>
                  </Stack>
                </Grid>
                <Grid>
                  <Typography id="boardcontent">
                    {comment.content}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography>
                    {Date(comment.date)}
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
              style={{ backgroundColor : '#1b5e20' }}
            >
              등록
            </Button>
          </Stack>
          {clientId === dataList.clientId &&
            <Stack
              direction="row"
              spacing={2}
              justifyContent="right"
            >
              <Item>
                <Link to={`/board/update/${boardId}`} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor : '#1b5e20' }}
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
          }
        </Container>
      </main>
      {/* <StickyFooter/> */}
    </ThemeProvider>

  );
}
