import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import Paging from '../common/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const theme = createTheme();

// function createData(num, tag, title, writer, created_at) {
//   return { num, tag, title, writer, created_at };
// }

// const rows = [
//   createData(1, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
//   createData(2, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
//   createData(3, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
//   createData(4, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
//   createData(5, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
// ];


export default function BoardTable() {
  const [dataList, setDataList] = useState([]);
  const BOARD_GET_URL = 'http://i6c109.p.ssafy.io:8051/board';

  const getBoards = async () => {
    // const boardJson = await (
    //   await fetch ('http://i6c109.p.ssafy.io:8051/board'
    //   )
    // ).json();
    axios.get(BOARD_GET_URL,)
      .then((response) => {
        console.log(response.data);
        setDataList(response.data);
      }).catch((error) => {
        //에러처리
        alert("게시판이 비어있습니다");
      });
    // console.log(boardJson);
  };

  useEffect(() => {
    getBoards()
  }, [])

  return (
    <ThemeProvider theme={theme} >
      <Grid container sx={{ height : '100vh', m: 4}}>
        <CssBaseline />
        <TableContainer  maxWidth="sm" align="center">
          <Table sx={{ m : 2, width: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell align="center">말머리</TableCell>
                <TableCell align="center">제목</TableCell>
                <TableCell align="center">작성자</TableCell>
                <TableCell align="center">작성날짜</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList ? dataList.map((d) => (
                <TableRow
                  key={d.boardId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {d.boardId}
                  </TableCell>
                  <TableCell align="center">{d.tag}</TableCell>
                  <TableCell align="center">{d.title}</TableCell>
                  <TableCell align="center">{d.clientId}</TableCell>
                  <TableCell align="center">{d.date}</TableCell>
                </TableRow>
              )) : ''}
            </TableBody>
          </Table>
          <Paging />
        </TableContainer>
      </Grid>
    </ThemeProvider>
  )
}
