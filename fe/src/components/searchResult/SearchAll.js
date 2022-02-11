import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const campingCards = [1, 2, 3, 4];
const userCards = [1, 2, 3, 4];
const communityCards = [1, 2, 3, 4];

const theme = createTheme();

export default function SearchAll() {
  return (
    <ThemeProvider theme={theme}>    
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 10,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                pt: 5,
              }}
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              '@@@' 검색 결과
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="lg">
          <Grid container alignItems="center" >
            <Grid>
              <Typography variant="h4">
                캠핑장
              </Typography>
            </Grid>
            <Link to={'/search/camping'} style={{textDecoration:'none'}}>
              <Grid>
                <Typography variant="h6">
                  더보기
                </Typography>
              </Grid>
            </Link>
          </Grid>
          <Grid container spacing={4} sx={{mb: 8, mt: 1}}>
            {campingCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  align="center"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                      pt: '0%',
                    }}
                    image="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzExNTc1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                    alt="CampingImage"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      $캠핑장 이름
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">상세정보</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container alignItems="center" >
            <Grid>
              <Typography variant="h4">
                사용자
              </Typography>
            </Grid>
            <Link to={'/search/user'} style={{textDecoration:'none'}}>
              <Grid>
                <Typography variant="h6">
                  더보기
                </Typography>
              </Grid>
            </Link>
          </Grid>
          <Grid container spacing={4} sx={{mb: 8, mt: 1}}>
            {userCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  align="center"
                >
                  <CardMedia
                    // component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                      // pt: '0%',
                    }}
                    // image="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzExNTc1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                    // alt="CampingImage"
                  >
                    <AccountCircleIcon sx={{ fontSize: 120 }} />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      $사용자 이름
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container alignItems="center" >
            <Grid>
              <Typography variant="h4">
                게시글
              </Typography>
            </Grid>
            <Link to={'/search/community'} style={{textDecoration:'none'}}>
              <Grid>
                <Typography variant="h6">
                  더보기
                </Typography>
              </Grid>
            </Link>
          </Grid>
          <Grid container spacing={4} sx={{mb: 8, mt: 1}}>
            {communityCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        U
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="제목"
                    subheader="날짜?"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzExNTc1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                    alt="BoardImage"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      게시글 내용
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>  
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}