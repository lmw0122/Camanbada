import Stack from '@mui/material/Stack';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const review = ({ details }) => {
  console.log(details);
  return (
    <div>
      {console.log(details) }
    {
        details.map((oneReview) => {
          { console.log(1) }
        <div> 1 </div>
        // <Stack>
        //   <Stack direction="row" >
        //     <Typography
        //       sx={{ fontWeight: 'bold', width: '18ch' }}
        //     >
        //       사용자
        //     </Typography>
        //     <Typography>
        //       {oneReview.clientId}
        //     </Typography>
        //   </Stack>
        //   <Divider sx={{ borderBottomWidth: 3, my: 1 }} />
        // </Stack>
      })
      }
    </div>
  )
}

export default review;