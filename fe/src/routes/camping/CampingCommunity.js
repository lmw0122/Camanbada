import * as React from 'react';
import NavBar from '../../components/common/NavBar'
import SelectVariantsCamping from '../../components/board/SelectVariantsCamping';
import BoardTable from '../../components/board/BoardTable';
import Button from '@mui/material/Button';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Axios from "axios";
import { useParams } from 'react-router-dom';
import CampingImage from '../../components/camping/CampingImage';
import Card from '@mui/material/Card';

function CampingCommunity() {

  const { campId } = useParams();
  const [basics, setBasics] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`http://i6c109.p.ssafy.io:8092/camp/basic/one/${campId}`)
      .then(res => setBasics(res.data))
  }, []);

  return (
    <div>
      <NavBar />    
      <Grid container sx={{ height : '100vh', mt: 10 }}>
        <CssBaseline />
        <Grid item xs={12} align="center">
          <Container 
            sx={{ py:0, mt: 2, mb: 2, display: 'flex', flexDirection: 'row'}}
            maxWidth="sm"
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CampingImage basics={ basics }></CampingImage>
            </Card>
          </Container>
          <Grid>
            <Typography display="inline" component="h1" variant="h4" align="center" sx={{m: 2}}> 
              {basics.facltNm}
            </Typography>
          </Grid>
          <SelectVariantsCamping />
        </Grid>
      <BoardTable />  
    </Grid>
    </div>
  )
}

export default CampingCommunity;