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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import CampingImage from "../camping/CampingImage";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createTheme();

export default function SearchCampingAlbum() {
  const { campkeyword } = useParams();

  const [campings, setCampings] = React.useState([]);

  React.useEffect(() => {
    Axios.get('http://i6c109.p.ssafy.io:8092/camp/basic/list')
      .then(res => setCampings(res.data))   
  }, []);

  const searchList = [];

  for (var i=0; i<campings.length; i++) {
    if (campkeyword === campings[i].doNm) {
      searchList.push(campings[i])
    }
  }
  console.log(searchList)

  // function clickCard() {
  //   window.location.href = `/search/${camp.campId}`
  // }


  return (
    <ThemeProvider theme={theme}>    
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 10,
            pb: 2,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                pt: 5,
              }}
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              '{campkeyword}' 검색 결과
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <Typography
              sx={{
                pt: 0,
              }}
              variant="h6"
              align="left"
              color="text.primary"
              gutterBottom
            >
              총 {searchList.length}개 캠핑장이 검색되었습니다.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {searchList.map((camp) => (
              <Grid item key={camp} xs={12} sm={6} md={3}>
                
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  align="center"
                  onClick = {(e) => {
                    e.preventDefault();
                    window.location.href = `/camping/${camp.campId}`;
                  }}
                  >
                  <CampingImage basics={ camp }></CampingImage>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="subtitle1" >
                      {camp.facltNm}
                    </Typography>
                  </CardContent>
                  <IconButton aria-label="add to favorites" color="warning" align="left">
                    <FavoriteIcon />
                    <Typography>
                      {camp.likes}
                    </Typography>
                  </IconButton>
                  {/* <CardActions>
                    <Button size="small">상세정보</Button>
                  </CardActions> */}
                </Card>
            
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}