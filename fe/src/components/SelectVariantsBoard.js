import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 10,
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
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
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              전체/도
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>서울특별시</MenuItem>
              <MenuItem value={20}>경기도</MenuItem>
              <MenuItem value={30}>강원도</MenuItem>
              <MenuItem value={40}>충청도</MenuItem>
              <MenuItem value={50}>전라도</MenuItem>
              <MenuItem value={60}>경상도</MenuItem>
              <MenuItem value={70}>제주특별자치도</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">시군구</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 300 }}>
            <Search>
              {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper> */}
              <StyledInputBase
                placeholder="캠핑장 이름을 입력하세요."
                inputProps={{ "aria-label": "search" }}
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
        </Stack>
      </Container>
    </Box>
  );
}
