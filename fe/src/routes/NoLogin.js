import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, CssBaseline, Grid, Typography, Box, Link, Stack, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavbarIndex from '../components/common/NavBarIndex'
import Carousel from '../components/common/Carousel'
import camping from '../img/campingImg/camping_Area.png'
import social from '../img/campingImg/social_media.png'
import share from '../img/campingImg/share1.png'
import fire from '../img/campingImg/fire.jpeg'
import camping11 from '../img/campingImg/camping11.jpeg'
import { teal, green, lightGreen, lime } from '@mui/material/colors';

const theme = createTheme();
export default function NoLogin () {
  const primary = green[50];
  const second = lightGreen[50];
  const third = lime[50];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarIndex />
      <Box
        component="img"
        sx={{ mt : 8, height: 550, width : 1690}}
        fullWidth
        alt="불멍"
        src={camping11}
      ></Box>
      {/* <Carousel /> */}
      <Grid container sx={{ border : '1px solid second', bgcolor : second, height: 500 }}>
        <Grid item xs={6}>
        <Box
            component="img"
            sx={{ height: 400, my : 5, mx : 25}}
            fullWidth
            alt="공유"
            src={share}
          ></Box>
        </Grid>
        <Grid item xs={6} sx={{ mt : 3 }}>
          <Typography variant="h3" fontWeight="bold" sx={{ mx : 2, mt : 20, mb : 2}}>실시간 물품 공유</Typography>
          <Typography variant="h6" sx={{ my : 3, ml : 3, mr : 10}}>
          캠핌장별 커뮤니티를 통해 실시간으로 필요한 물품을 공유하거나 나눠쓸 수 있고, 챙기지 못한 물건이 있을 때 나눔을 통해 만족스러운 캠핑을 즐길 수 있다.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ border : '1px solid primary', bgcolor : primary, height : 500}}>
        <Grid item xs={6} sx={{ mt : 3}}>
          <Typography variant="h3" fontWeight="bold" sx={{ mx : 20, mt : 20, mb : 2}}>캠핑장 정보 공유</Typography>
          <Typography variant="h6" sx={{ my : 3, ml : 20, mr : 17}}>사용자들의 후기나 실시간 반응을 통해 현재 캠핑장의 상태나 날씨 등 다양한 정보를 공유할 수 있다.</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{ height: 400, my : 7, mx : 30}}
            fullWidth
            alt="캠핑장"
            src={camping}
          ></Box>

        </Grid>
      </Grid>
      <Grid container sx={{ border : '1px solid third', bgcolor : third, height: 500 }}>
        <Grid item xs={6}>
        <Box
            component="img"
            sx={{ height: 500, width : 750}}
            fullWidth
            alt="소셜"
            src={social}
          ></Box>
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h3" fontWeight="bold" sx={{ mx : 3, mt : 25, mb : 2}}>취향 맞는 친구 찾기</Typography>
            <Typography variant="h6" sx={{ my : 3, ml : 3, mr : 22}}>팔로우 기능을 통해 비슷한 취향을 가진 사용자의 게시물을 볼 수 있고 메세지 기능으로 정보 공유와 함께 캠핑 취향 맞는 친구를 찾을 수 있다.</Typography>
        </Grid>
      </Grid>
      <Grid>

      </Grid>
    </ThemeProvider>
  );
};