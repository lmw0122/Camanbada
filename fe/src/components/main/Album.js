import * as React from 'react';
import { Container, CssBaseline, Typography, Grid, TextField, Stack, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>    
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 5,
            mb: 2,
          }}
        >
          <Container maxWidth="lg">
            {/* <Stack
              sx={{ 
                mb: 5, 
              }}
              direction="row"
              justifyContent="center"
            >
              <img src={require("../img/logo.png")} alt="logo"></img>
            </Stack> */}
            <Typography
              sx={{
                fontWeight: 'bold',
              }}
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
            >
              현재 인기 캠핑장
            </Typography>
            {/* <Typography variant="h6" align="center" color="text.secondary" paragraph>
              좋아요 수가 많은 순서대로 캠핑장을 추천해준다.
            </Typography> */}
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                    {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                  </CardContent>
                  {/* 캠핑장 상세 정보 링크 걸기 */}
                  <Link to={'/campingdetail'} >
                    <CardActions >
                      <Button size="small" >상세정보</Button>
                    </CardActions>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
