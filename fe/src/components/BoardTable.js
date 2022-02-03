import * as React from 'react';
import Paging from './Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, dividerClasses, Grid, Typography } from '@mui/material';

const theme = createTheme();

function createData(num, tag, title, writer, created_at) {
  return { num, tag, title, writer, created_at };
}

const rows = [
  createData(1, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
  createData(2, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
  createData(3, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
  createData(4, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
  createData(5, '나눔', '고기 나눔합니다!', 'LEE', '2022-01-27'),
];

export default function BoardTable() {
  return (
    <ThemeProvider theme={theme} >
      <Grid container sx={{ height : '100vh', m: 4}}>
        <CssBaseline />
        <TableContainer component={Paper} maxWidth="sm" align="center">
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
              {rows.map((row) => (
                <TableRow
                  key={row.num}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.num}
                  </TableCell>
                  <TableCell align="center">{row.tag}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.writer}</TableCell>
                  <TableCell align="center">{row.created_at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Paging />
        </TableContainer>
      </Grid>
    </ThemeProvider>
  )
}
