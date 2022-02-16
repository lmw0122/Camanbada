import Stack from '@mui/material/Stack';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Review = ({ reviews }) => {
  console.log('review.js 오다')
  console.log('받아온 값:', reviews);

  return (
    <Stack>
      {reviews.map((oneReview) => (

      <Typography>
        dd
      </Typography>
      )

            
      )}

    </Stack>
    
      
    
  )
}

export default Review;