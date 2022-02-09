import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import CampingDefaultImage from "../img/CampingDefaultImage.png";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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


export default function BasicTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 캠핑장 api 부분
  const { campId } = useParams();
  const [basics, setBasics] = React.useState([]);
  const [details, setDetails] = React.useState([]);

  const getBasic = async () => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:5555/camp/basic/one/${campId}`
      )
    ).json();
    setBasics(json)
  }
  React.useEffect(() => {
    getBasic();
  }, []);

  const setDetail = async () => {
    const json2 = await (
      await fetch (
        `http://i6c109.p.ssafy.io:5555/camp/detail/one/${campId}`
      )
    ).json();
    setDetails(json2)
  }
  React.useEffect(() => {
    setDetail();
  }, []);

  // 네이버 지도 api 부분
  function NaverMapAPI() {
    const navermaps = window.naver.maps;
    
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '60vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: basics.mapY, lng: basics.mapX }} // 지도 초기 위치
        defaultZoom={10} // 지도 초기 확대 배율
      >
         <Marker
          key={1}
          position={new navermaps.LatLng(basics.mapY, basics.mapX)}
          animation={2}
        />
      </NaverMap>
    );
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py:0, mt: 12, mb: 8}} maxWidth="md">
          <Container 
            sx={{ py:0, mt: 2, mb: 2, display: 'flex', flexDirection: 'row'}}
            maxWidth="sm"
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  // pt: '56.25%',
                  pt: '0%',
                }}
                // width='30vw'
                // height='45vw'
                image={basics.firstImageUrl}
                // image="https://gocamping.or.kr/upload/camp/866/thumb/thumb_720_0210doTpcD0QrJTQnYauD1V6.jpg"
                alt={"CampingImage"}
              />
            </Card>
          </Container>
          <Container>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
              variant="h4"
              align="center"
            >
              {basics.facltNm}
            </Typography>
          </Container>
          <Container>
            <Typography
              sx={{
                mb: 2
              }}
              align="center"
            >
              한 줄 소개: {basics.lineIntro}
            </Typography>
          </Container>
          <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                style={{
                  border: "1px black solid",
                  color: "black"
                }}
                variant="outlined"
              >
                <ThumbUpOffAltIcon />
              </Button>
              <Typography
                sx={{
                  // pt: 5,
                }}
                component="h1"
                variant="h6"
                align="center"
              >
                {basics.likes}
              </Typography>
            </Stack>
            <Stack>
              <Link to={`/community/${campId}`} style={{textDecoration:'none'}}>
                <Button
                  style={{
                    border: "1px black solid",
                    color: "black"
                  }}
                  variant="outlined"
                >
                  캠핑장 커뮤니티 이동
                </Button>
              </Link> 
            </Stack>
          </Stack> 
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="캠핑장 소개" {...a11yProps(0)} />
                <Tab label="영업 정보" {...a11yProps(1)} />
                <Tab label="위치" {...a11yProps(2)} />
                <Tab label="후기" {...a11yProps(3)} />
                
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {details.intro}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography>
                문의처: {details.tel}
              </Typography>
              <Typography>
                운영기간: {details.operPdCl}
              </Typography>
              <Typography>
                운영일: {details.operDeCl}                
              </Typography>
              <Typography>
                홈페이지: <a href={details.homepage}>{details.homepage}</a>             
              </Typography>
              <Typography>
                예약방법: {details.resveCl}                
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography sx={{ mb: 1 }}>
                주소: {basics.address}
              </Typography>
              {/* 네이버 지도 마커 */}
              <RenderAfterNavermapsLoaded
                ncpClientId={'v1qzk7bjak'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
              >
                <NaverMapAPI />
              </RenderAfterNavermapsLoaded>
            </TabPanel>
            <TabPanel value={value} index={3}>
              후기 내용
            </TabPanel>
          </Box>

        </Container>
      </main>
    </ThemeProvider>

  );
}
