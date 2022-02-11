import * as React from 'react';
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

const theme = createTheme();


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BoardDetailMine() {
  const [comments, setComments] = React.useState([
    {
      id: 1,
      writer: "김싸피",
      date: "2022-02-05",
      content: "멋지네요."
    },
    {
      id: 2,
      writer: "이싸피",
      date: "2022-02-07",
      content: "저도 갈래요!"
    },
  ]);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ p:0, mt: 12, mb: 8}} maxWidth="md">
          <Typography sx={{ mb: 1 }}>
            캠핑 소통-나눔
          </Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>
            고기 나눔합니다. (게시글 제목)
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
                작성자 닉네임
              </Typography>
              <Typography>
                2022.01.20 14:44
              </Typography>
            </Grid>
            <Grid>
              좋아요 수
            </Grid>
          </Stack>
          <Box sx={{ mb: 2, height: 400 }} >
            게시글 내용을 어떻게 넣어서 보여줄까요 
            스크롤 기능도 추가해아함
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
              좋아요 6
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
                    {comment.writer}
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
              <Link to={'/create'} style={{textDecoration:'none'}}>
                <Button
                  // style={{
                  //   backgroundColor: "#009688"
                  // }}
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
