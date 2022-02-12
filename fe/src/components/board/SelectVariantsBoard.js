import * as React from 'react';
import Axios from 'axios'
import { Container, Typography, Box, Stack, TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '4.5ch',
  },
}));


export default function SelectVariants() {

  const [camp, setCamp] = React.useState('');

  const [sido, setSido] = React.useState('');

  const [sigungu, setSigungu] = React.useState('');

  const [tag, setTag] = React.useState('');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleChange1 = (event) => {
    setSido(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setSigungu(event.target.value);
  };

  const handleChange3 = (event, value) => {
    setCamp(value)
  }
  
  var dropbox3 = [];
  var camps = [];

  const [campings, setCampings] = React.useState([]);

  React.useEffect(() => {
    Axios.get('http://i6c109.p.ssafy.io:8092/camp/basic/list')
      .then(res => setCampings(res.data))   
  }, []);

  const [sidosjson, setSidosjson] = React.useState('');

  React.useEffect(() => {
    Axios.get('http://i6c109.p.ssafy.io:8092/camp/basic/list/sido')
      .then(res => setSidosjson(res.data))   
  }, []);

  const [sigungusjson, setSigungusjson] = React.useState('');

  // sido 값이 변화할 때만 api 호출!
  React.useEffect(() => {
    if (sido !== '') {
      Axios.get(`http://i6c109.p.ssafy.io:8092/camp/basic/list/sigungu/${sido}`)
        .then(res => setSigungusjson(res.data)) 
    }
  }, [sido]);

  const sidos = [];

  const sigungus = [];

  for (var i=0; i<sidosjson.length; i++) {
    sidos.push(sidosjson[i].doNm)
  }

  for (var i=0; i<sigungusjson.length; i++) {
    sigungus.push(sigungusjson[i].sigunguNm)
  }
  
  for (var i=0; i<campings.length; i++) {
    if (sido !== '') {
      if (sigungu === '') {
        if (campings[i].doNm === sido) {
          dropbox3.push(campings[i].facltNm);
          camps.push(campings[i].campId)       
        } 
      } else {
        if (campings[i].doNm === sido && campings[i].sigunguNm === sigungu) {
          dropbox3.push(campings[i].facltNm);
          camps.push(campings[i].campId)
        }
      }
    } 
  }
  
  // 최종 선택된 캠핑장
  var finalc = '';
  for (var i=0; i<camps.length; i++) {
    if (camp === dropbox3[i]) {
      finalc = camps[i]
    }
  }


  const CAMP_GET_URL = 'http://i6c109.p.ssafy.io:8092/camp/basic/list';

  // const getCampings = () => {
  //   axios.get(CAMP_GET_URL,)
  //     .then((response) => {
  //       setCampings(response.data);
  //     }).catch((error) => {
  //       //에러처리
  //       alert("캠핑장이 없습니다");
  //     });
  // };


return (
  <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 3,
      pb: 0,
    }}
  >
    <Container>
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
            value={sido}
            onChange={handleChange1}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sidos.map((sido) => (
              <MenuItem key={sido} value={sido}>
                {sido}
              </MenuItem>           
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">시군구</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={sigungu}
            onChange={handleChange2}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {sigungus.map((sigungu) => (
              <MenuItem key={sigungu} value={sigungu}>
                {sigungu}
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
          // options={top100Films.map((option) => option.title)}
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
        <Link to={`/community/${finalc}`}>
          <Button
            type="submit"
            sx={{
              m: 1,
              minWidth: 100,
              height: "7ch",
            }}
            variant="contained"
          >
            이동
          </Button>
        </Link>
      </Stack>
      <Stack
        sx={{ 
          pt: 0,
          pb: 0, 
        }}
        direction="row"
        justifyContent="center"
      >
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="tag-select">말머리</InputLabel>
            <Select
              id="tag-select"
              defaultValue=""
              // value={tag}
              label="말머리"
              onChange={handleChange}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader sx={{ fontWeight: 'bold' }}>캠핑 소통</ListSubheader>
              <MenuItem value={1}>나눔</MenuItem>
              <MenuItem value={2}>거래</MenuItem>
              <MenuItem value={3}>후기</MenuItem>
              <MenuItem value={4}>자유</MenuItem>
            <ListSubheader sx={{ fontWeight: 'bold' }}>자유 소통</ListSubheader>
              <MenuItem value={5}>장비 후기</MenuItem>
              <MenuItem value={6}>자유</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ my: 1, minWidth: 300 }}>
          <Search>
            <StyledInputBase
              placeholder="검색어를 입력하세요."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </FormControl>
        <Button
          type="submit"
          sx={{
            m: 1,
            minWidth: 100,
            height: "7ch",
          }}
          variant="contained"
        >
          검색
        </Button>
        <Link to={'/create'}>
          <Button 
            type="submit"
            sx={{
              m: 1,
              minWidth: 100,
              height: "7ch",
            }}
            color="error"
            variant="contained"
          >
            게시글 작성
          </Button>
        </Link>
        {/* <Link href="/create" style={{textDecoration:'none'}}>
        </Link> */}
      </Stack>
    </Container>
  </Box>
  );
}