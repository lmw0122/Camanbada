import * as React from 'react';
import NavBar from '../components/common/NavBar'
import SelectVariantsBoard from '../components/board/SelectVariantsBoard';
import BoardTable from '../components/board/BoardTable';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Community() {
  return (
    <div>
      <NavBar />    
      <Grid container sx={{ height : '100vh', m: 4}}>
        <CssBaseline />
        <Grid item xs={12} align="center">
          <Container sx={{mt : 10, mb : 2}}>
            <img src="img/camping.jpg" sx={{ mt: 20 }} alt="camping"/>
          </Container>
          <div>
            <Typography display="inline" component="h1" variant="h4" align="center" sx={{m: 2}}> 
              CAM:NABADA 커뮤니티
            </Typography>
          </div>
          <SelectVariantsBoard />
        </Grid>
      <BoardTable />  
    </Grid>
    </div>
  )
}

export default Community;