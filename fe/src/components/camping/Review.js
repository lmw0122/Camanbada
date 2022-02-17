import Stack from '@mui/material/Stack';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Review = ({ details }) => {
  return (
    <Stack>
      {details.map((oneReview) => (
        <Stack><Typography sx={{ fontWeight: 'bold', width: '50ch' }}>          
          [{oneReview.tag}] {oneReview.date.replace("T", " ").substring(2,16)} 
          </Typography>
          <Typography sx={{fontWeight: 'bold', width: '18ch'}}>
          {oneReview.clientId}님의 후기
          </Typography>
           <Typography dangerouslySetInnerHTML={{ __html: oneReview.content }}></Typography>
          <Divider sx={{ borderBottomWidth: 3, my: 1 }} />
          </Stack>
      )
      )}
      {details.length == 0 &&
        <Stack>
        <Typography sx={{fontWeight: 'bold', width: '100ch'}}>
         작성된 후기가 없습니다
        </Typography>
        </Stack>
      }

    </Stack>
  )
}

export default Review;