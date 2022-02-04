import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme();

export default function ProfileHead() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py:0, mt: 12, mb: 8}} maxWidth="md">
          <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              mb: 10
            }}
          >
            <Grid item align="center"md={2.4}>
              <AccountCircleIcon  sx={{ fontSize: 120 }} />
              <Typography variant="h5">
                닉네임
              </Typography>
            </Grid>
            <Grid item align="center" md={2.4}>
              <Typography>
                게시물
              </Typography>
              <Typography>
                4
              </Typography>
            </Grid>
            <Grid item align="center" md={2.4}>
              <Typography>
                팔로워
              </Typography>
              <Typography>
                16
              </Typography>
            </Grid>
            <Grid item align="center" md={2.4}>
              <Typography>
                팔로잉
              </Typography>
              <Typography>
                20
              </Typography>
            </Grid>
            <Grid item align="center" md={2.4}>
              <Link to={'/create'} style={{textDecoration:'none'}}>
                <Button
                  style={{
                    backgroundColor: "#009688"
                  }}
                  variant="contained"
                >
                  게시글 작성
                </Button>
              </Link>
              <Link to={'/profile/update'} style={{textDecoration:'none'}}>
                <Button variant="contained">
                  프로필 편집
                </Button>
              </Link>
              
            </Grid>
          </Grid>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="내가 올린 게시물" {...a11yProps(0)} />
                <Tab label="내가 좋아요한 캠핑장" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} align="center">
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
            </TabPanel>
            <TabPanel value={value} index={1} align="center">
              <Card
                // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                sx={{ maxWidth: 345 }}
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
                <Link to={'/campingdetail'}>
                  <CardActions>
                    <Button size="small">상세정보</Button>
                  </CardActions>
                </Link>
              </Card>
            </TabPanel>
          </Box>
        </Container>
      </main>
    </ThemeProvider>

  );
}
