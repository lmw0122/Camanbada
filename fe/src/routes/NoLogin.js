import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, CssBaseline, Grid, Typography, Box, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const theme = createTheme();

export default function NoLogin () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Container maxWidth="lg">
          <Stack direction="row">
              <Box
                component="img"
                alt="logo"
                src={require("../img/logo.png")}
                sx={{ height: 45, width: 210 }}
              >
              </Box>
              <Button
                variant="contained"
                href="/signup"
                sx={{ height: 45, m: 1 }}
              >
                회원가입
              </Button>
              <Button variant="contained" href="/login" sx={{ height: 45, m: 1 }}>
                로그인
              </Button>
            </Stack>
        </Container>
      </Box>
      <Box sx={{ backgroundSize: "cover" }}>
        <Container sx={{ backgroundSize: "cover" }}>
        <Grid 
          // item xs={12} 
          // maxWidth="lg"
          sx={{ backgroundSize: "cover" }}
          // sx={{ width: 'auto'}}
        >
          <Slider {...settings}>
            <Grid>
              <img
                src={require("../img/campingImg/camping1.jpg")}
                alt="camping1"
              />
            </Grid>
            <div>
              <img
                src={require("../img/campingImg/camping2.jpg")}
                alt="camping2"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping3.jpg")}
                alt="camping3"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping4.jpg")}
                alt="camping4"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping5.jpg")}
                alt="camping5"
              />
            </div>
          </Slider>
        </Grid>
        </Container>
      </Box>
      {/* <Grid container sx={{ m: 2, height: "100vh" }} direction="column">
        <Grid sx={{ mb: 4 }}>
          <Stack direction="row">
            <Box
              component="img"
              alt="logo"
              src={require("../img/logo.png")}
              sx={{ height: 45, width: 210 }}
            >
            </Box>
            <Button
              variant="contained"
              href="/signup"
              sx={{ height: 45, m: 1 }}
            >
              회원가입
            </Button>
            <Button variant="contained" href="/login" sx={{ height: 45, m: 1 }}>
              로그인
            </Button>
          </Stack>
        </Grid>
        <Grid 
          // item xs={12} 
          maxWidth="md"
          // sx={{ backgroundSize: "cover" }}
        >
          <Slider {...settings}>
            <Grid>
              <img
                src={require("../img/campingImg/camping1.jpg")}
                alt="camping1"
              />
            </Grid>
            <div>
              <img
                src={require("../img/campingImg/camping2.jpg")}
                alt="camping2"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping3.jpg")}
                alt="camping3"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping4.jpg")}
                alt="camping4"
              />
            </div>
            <div>
              <img
                src={require("../img/campingImg/camping5.jpg")}
                alt="camping5"
              />
            </div>
          </Slider>
        </Grid>
      </Grid> */}
    </ThemeProvider>
  );
};