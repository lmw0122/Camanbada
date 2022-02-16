import Stack from '@mui/material/Stack';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Review = ({ details }) => {
  console.log('review.js 오다')
  console.log('받아온 값:', details);
  return (
    <Stack>
      {details.map((oneReview) => (
          <Stack>
          <Typography sx={{fontWeight: 'bold', width: '18ch'}}>
          아이디 {oneReview.clientId} 
          </Typography>
          <Typography>
          후기 {oneReview.content}
          </Typography>
          <Divider sx={{ borderBottomWidth: 3, my: 1 }} />
          </Stack>
        
      )
  )}

    </Stack>
  )
}

export default Review;