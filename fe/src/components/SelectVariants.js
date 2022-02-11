import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";



const PROVINCES = ["서울시", "부산시", "인천시", "대구시", "광주시", "대전시", "울산시",
              "세종시", "경기도", "강원도", "충청북도", "충청남도", "경상북도", 
              "경상남도", "전라북도", "전라남도", "제주도"
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '4.5ch',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));

export default function SelectVariants() {
  
  // 전체/도
  const [province, setProvince] = React.useState('');
  // 시군구
  const [city, setCity] = React.useState('');

  const [camp, setCamp] = React.useState('');

  
  const handleChange1 = (event) => {
    setProvince(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setCity(event.target.value);
  };

  // onChange={(event, value) => console.log(value)}

  // const handleChange3 = (event, value) => {
  //   setCamp(event.target.value)
  // }
  const handleChange3 = (event, value) => {
    // console.log(value)
    setCamp(value)
  }
 
  // console.log(camp)
  
  // const handleChange3 = (event) => {
  //   setCamp(event.target.value);
  // };

  // console.log(camp)

  // 시군구 드롭박스 
  var dropbox2 = [];

  if (province !== '') {
    if (province === PROVINCES[0]) {
      dropbox2 = ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"]
    } else if (province === PROVINCES[1]) {
      dropbox2 = ["중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "강서구", "해운대구", "사하구", "금정구", "연제구", "수영구", "사상구", "기장군"]
    } else if (province === PROVINCES[2]) {
      dropbox2 = ["중구", "동구", "남구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"]
    } else if (province === PROVINCES[3]) {
      dropbox2 = ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"] 
    } else if (province === PROVINCES[4]) {
      dropbox2 = ["동구", "서구", "남구", "북구", "광산구"]
    } else if (province === PROVINCES[5]) {
      dropbox2 = ["동구", "중구", "서구", "유성구", "대덕구"]
    } else if (province === PROVINCES[6]) {
      dropbox2 = ["중구", "남구", "동구", "북구", "울주군"]
    } else if (province === PROVINCES[7]) {
      dropbox2 = ["금남면", "세종시", "소정면", "연서면", "전동면"]
    } else if (province === PROVINCES[8]) {
      dropbox2 = ["가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"]
    } else if (province === PROVINCES[9]) {
      dropbox2 = ["원주시", "춘천시", "강릉시", "동해시", "속초시", "삼척시", "홍천군", "태백시", "철원군", "횡성군", "평창군", "영월군", "정선군", "인제군", "고성군", "양양군", "화천군", "양구군"]
    } else if (province === PROVINCES[10]) {
      dropbox2 = ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"]
    } else if (province === PROVINCES[11]) {
      dropbox2 = ["천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"]
    } else if (province === PROVINCES[12]) {
      dropbox2 = ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"]
    } else if (province === PROVINCES[13]) {
      dropbox2 = ["창원시", "김해시", "진주시", "양산시", "거제시", "통영시", "사천시", "밀양시", "함안군", "거창군", "창녕군", "고성군", "하동군", "합천군", "남해군", "함양군", "산청군", "의령군"]
    } else if (province === PROVINCES[14]) {
      dropbox2 = ["전주시", "익산시", "군산시", "정읍시", "완주군", "김제시", "남원시", "고창군", "부안군", "임실군", "순창군", "진안군", "장수군", "무주군"]
    } else if (province === PROVINCES[15]) {
      dropbox2 = ["여수시", "순천시", "목포시", "광양시", "나주시", "무안군", "해남군", "고흥군", "화순군", "영암군", "영광군", "완도군", "담양군", "장성군", "보성군", "신안군", "장흥군", "강진군", "함평군", "진도군", "곡성군", "구례군"] 
    } else if (province === PROVINCES[16]) {
      dropbox2 = ["제주시", "서귀포시"]
    }
  }
  

  var dropbox3 = [];
  var camps = [];

  const [campings, setCampings] = React.useState([]);

  const getCampings = async() => {
    const json = await (
      await fetch (
        `http://i6c109.p.ssafy.io:8092/camp/basic/list`
      )
    ).json();
    setCampings(json);
  };
  React.useEffect(() => {
    getCampings()
  }, []);

  for (var i=0; i<campings.length; i++) {
    if (province !== '') {
      if (city === '') {
        if (campings[i].doNm === province) {
          dropbox3.push(campings[i].facltNm);
          camps.push(campings[i].campId)
          
        } 
      } else {
        if (campings[i].doNm === province && campings[i].sigunguNm === city) {
          dropbox3.push(campings[i].facltNm);
          camps.push(campings[i].campId)
        }
      }
    } 
    //   else {
    //   dropbox3.push(campings[i].facltNm)
    // }
  }
  var finalc = '';
  for (var i=0; i<camps.length; i++) {
    if (camp === dropbox3[i]) {
      finalc = camps[i]
    }
  }
  // console.log(province)
  // console.log(dropbox3)
  
  // console.log(finalc)

  // if (dropbox3.length === 0) {
  //   dropbox3 = ['해당 지역에 캠핑장이 없습니다.']
  // }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 10,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          sx={{ 
            mb: 5, 
          }}
          direction="row"
          justifyContent="center"
        >
          <img src={require("../img/logo.png")} alt="logo"></img>
        </Stack>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          캠핑장을 검색하세요!
        </Typography>
        <Stack
          sx={{ 
            pt: 0,
            pb: 0, 
          }}
          direction="row"
          justifyContent="center"
        >
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">전체/도</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={province}
              onChange={handleChange1}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {PROVINCES.map((pro) => (
                <MenuItem key={pro} value={pro}>
                  {pro}
                </MenuItem>           
              ))}
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">시군구</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={city}
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {dropbox2.map((drop) => (
                <MenuItem key={drop} value={drop}>
                  {drop}
                </MenuItem>           
              ))}
            </Select>
          </FormControl>
          <Autocomplete
            onChange={handleChange3}
            sx={{ minWidth: 300, m: 1 }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={dropbox3.map((db3) => db3)}
            // value={camp}
            // onChange={handleChange3}
            renderInput={(params) => (
              <TextField
                
                {...params}
                label="캠핑장 이름을 입력하세요."
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          <Link to={`/camping/${finalc}`}>
            <Button
                type="submit"
                sx={{
                  m: 1,
                  minWidth: 100,
                  height: '7ch'
                }}
                variant="contained"
              >
                검색
            </Button> 
          </Link>          
        </Stack>
      </Container>  
    </Box>
  );
}
