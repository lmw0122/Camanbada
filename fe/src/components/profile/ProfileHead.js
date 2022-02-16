import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import IsFollow from "./IsFollow";
import ProfileUser from "./ProfileUser";
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Stack,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CampingImage from "../camping/CampingImage";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export default function ProfileHead() {
  const [value, setValue] = React.useState(0);

  // LocalStroage에서 accessToken을 가져와서 header에 Authorization 값으로 담아주기
  const accessToken = localStorage.getItem("accessToken");
  const HEADER = {
    headers: {
      Authorization: accessToken,
    },
  };

  const { nick } = useParams("");
  const [userInfo, setUserInfo] = useState("");
  const [otherUserCheck, setOtherUserCheck] = useState("");
  const [isFollow, setIsFollow] = useState(false);

  const [loading, setLoading] = useState(true);
  const [userIntro, setUserIntro] = useState("");
<<<<<<< HEAD
  const [followerList, setFollowerList] = useState("");
  const [followingList, setFollowingList] = useState("");

  const [likedCampings, setLikedCampings] = useState("");
=======
  const [ followerList, setFollowerList ] = useState("");
  const [followingList, setFollowingList] = useState("");
  
  const [otherFollowerLength, setOtherFollowerLength] = useState("");
  const [otherFollowingLength, setOtherFollowingLength] = useState("");
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9

  const getFollow = (isFollow) => {
    setIsFollow(isFollow);
    getUserId();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  // 유저 정보 얻어오기
  // nick은 한글이라 인코딩
  const uri = `http://i6c109.p.ssafy.io:8000/user/${nick}`;
  const encoded = encodeURI(uri);
  
  //현재 프로필 사용자
  const getUserId = () => {
<<<<<<< HEAD
    axios.get(encoded).then((res) => {
=======
    axios
    .get(encoded)
    .then((res) => {
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9
      setUserInfo(res.data);
      setLoading(false);
      setUserIntro(res.data[0].intro);

      followCheck(res.data);
<<<<<<< HEAD
    });
  };
  //팔로잉 리스트
  function getFollwoingList(loginUserId) {
    axios
      .get(`http://i6c109.p.ssafy.io:8000/follow/follower`, HEADER)
      .then((res) => {
        setFollowingList(res.data);
        console.log(res);
        res.data.map((folloUser) => {
          console.log(folloUser.following + " " + loginUserId);
          if (folloUser.following === loginUserId) {
=======
      });
  }

  //console.log("현재 눌러본 프로필의 아이디" + userInfo[0].id);
  //팔로잉 리스트
  function getFollwoingList(loginUserId,profileUserId) {
    const URL = `http://i6c109.p.ssafy.io:8000/follow/${profileUserId}/follower`;
    axios.get(URL,HEADER)
      .then(res => {
        setFollowingList(res.data);
        //console.log(res.data + "````````````````````` " + loginUserId + "````````````````````` " + profileUserId);
        res.data.map(folloUser => {
          //console.log(folloUser.following + " " + loginUserId);
          if (folloUser.following == loginUserId) {
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9
            setIsFollow(true);
          }
        });
      });
  }
  //팔로워 리스트
<<<<<<< HEAD
  const getFollowerList = () => {
    axios
      .get(`http://i6c109.p.ssafy.io:8000/follow/following`, HEADER)
      .then((res) => setFollowerList(res.data));
  };
=======
  function getFollowerList(profileUserId) {
    const URL = `http://i6c109.p.ssafy.io:8000/follow/${profileUserId}/following`;
    axios.get(URL,HEADER)
      .then(res => setFollowerList(res.data))
  }
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9

  //현재 로그인한 사용자인지 아닌지
  function followCheck(user) {
    const URI = `http://i6c109.p.ssafy.io:8000/user`;
<<<<<<< HEAD
    axios.get(URI, HEADER).then((res) => {
      getFollwoingList(user[0].id);
      if (res.data == user[0].id) setOtherUserCheck(false);
      else {
        setOtherUserCheck(true);
      }
    });
=======
    axios.get(URI,HEADER)
      .then((res) => {
        getFollwoingList(res.data, user[0].id);//검색한 프로필 id
        getFollowerList(user[0].id);

        if (res.data == user[0].id)
          setOtherUserCheck(false);
        else {
          setOtherUserCheck(true);
        }
      })
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9
  }



  const getLikedCampingList = () => {
    axios
      .get(encodeURI(`http://i6c109.p.ssafy.io:8092/camp/like/list/${nick}`))
      .then((res) => {
        setLikedCampings(res.data);
      });
  };

  React.useEffect(() => {
    getUserId();
    getFollowerList();
  }, []);

  React.useEffect(() => {
    getUserId();
  }, [nick]);

  React.useEffect(() => {
    getLikedCampingList();
  }, [nick]);

  const searchList = [];

  for (var i = 0; i < likedCampings.length; i++) {
    searchList.push(likedCampings[i]);
  }
  
  return (
    <div>
      {loading ? null : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Container sx={{ py: 0, mt: 12, mb: 8 }} maxWidth="md">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  mb: 5,
                }}
              >
                <Grid item align="center" md={2.4} sx={{ mr: 4 }}>
                  <AccountCircleIcon sx={{ fontSize: 150 }} />
                </Grid>
                <Grid item md={7.2}>
                  {/* 닉네임 */}
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {nick}
                    </Typography>
                    <ProfileUser />
<<<<<<< HEAD
                    {/* <Link to={'/message'} style={{textDecoration:'none'}}>
                  <Button
                    style={{
                      border: "1px black solid",
                      color: "black"
                    }}
                    variant="outlined"
                  >
                    메시지 보내기
                  </Button>
                </Link>                */}
                    {otherUserCheck === true && (
                      <IsFollow
                        isFollow={isFollow}
                        followUser={userInfo[0].id}
                        getFollow={getFollow}
                      ></IsFollow>
                    )}
                    {otherUserCheck === false && (
                      <Button
                        style={{
                          border: "1px black solid",
                          color: "black",
                        }}
                        onClick={() => {
                          window.location.href = `/profile/update/${nick}`;
                        }}
                        variant="outlined"
                      >
                        프로필 편집
                      </Button>
                    )}
=======
                    
                    {otherUserCheck == true &&
                      <div>
                        <IsFollow
                          isFollow={isFollow}
                          followUser={userInfo[0].id }
                          getFollow={getFollow}
                        ></IsFollow>
                        {console.log(userInfo.id)}
                        <Link to={'/message'}
                          state={{
                            oppUserId: userInfo[0].id
                          }}
                          style={{ textDecoration: 'none' }}>
                          <Button style={{
                            border: "1px black solid",
                            color: "black"
                          }}
                          variant="outlined">
                            메시지 보내기
                          </Button>
                        </Link> 
                      
                      </div>
                    }
                    {otherUserCheck == false &&
                      <div>
                        <Button
                          style={{
                            border: "1px black solid",
                            color: "black"
                          }}
                          onClick={() => { window.location.href = `/profile/update/${nick}`}}
                          variant="outlined"
                        >
                          프로필 편집
                        </Button>
                        
            
                      </div>
                  }
>>>>>>> 01c8e1f7b03e4a9410b17149a6c9e52937d028d9
                  </Stack>
                  {/* 게시물, 팔로워, 팔로우 부분 */}
                  <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ fontSize: 20 }}>게시물</Typography>
                      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                        4
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ fontSize: 20 }}>팔로잉</Typography>
                      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                        {otherUserCheck === true && followerList.length}
                        {otherUserCheck === false && followingList.length}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ fontSize: 20 }}>팔로워</Typography>
                      <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                        {otherUserCheck === true && followingList.length}
                        {otherUserCheck === false && followerList.length}
                      </Typography>
                    </Stack>
                  </Stack>
                  {/* 자기 소개 부분 */}
                  <Stack>
                    {/* 150자 예시 */}
                    {userIntro}
                  </Stack>
                </Grid>
                {/* <Stack
              direction="column"
              spacing={2}
            >
              <Item>
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
              </Item>
              <Item>
                <Link to={'/profile/update'} style={{textDecoration:'none'}}>
                  <Button variant="contained">
                    프로필 편집
                  </Button>
                </Link>
              </Item>
            </Stack> */}
              </Grid>

              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                  >
                    <Tab label="올린 게시물" {...a11yProps(0)} />
                    <Tab label="좋아요한 캠핑장" {...a11yProps(1)} />
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
                  {/* <Card
                    // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    sx={{ maxWidth: 345 }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        // pt: '56.25%',
                        pt: "0%",
                      }}
                      image="https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzExNTc1NQ&ixlib=rb-1.2.1&q=80&w=1080"
                      alt="CampingImage"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        $캠핑장 이름
                      </Typography>
                    </CardContent> */}
                  {/* 캠핑장 상세 정보 링크 걸기 */}
                  {/* <Link to={"/campingdetail"}>
                      <CardActions>
                        <Button size="small">상세정보</Button>
                      </CardActions>
                    </Link>
                  </Card> */}

                  <Container sx={{ py: 0 }} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                      {/* {console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm")} */}
                      {searchList.map((camp) => (
                        <Grid item key={camp.campId} xs={12} sm={6} md={3}>
                          <Card
                            sx={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                            align="center"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = `/camping/${camp.campId}`;
                            }}
                          >
                            <CampingImage basics={camp}></CampingImage>
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography gutterBottom variant="subtitle1">
                                {camp.facltNm}
                              </Typography>
                            </CardContent>
                            <IconButton
                              aria-label="add to favorites"
                              color="warning"
                              align="left"
                            >
                              <FavoriteIcon />
                              <Typography>{camp.likes}</Typography>
                            </IconButton>
                            {/* <CardActions>
                    <Button size="small">상세정보</Button>
                  </CardActions> */}
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </TabPanel>
              </Box>
            </Container>
          </main>
        </ThemeProvider>
      )}
    </div>
  );
}
