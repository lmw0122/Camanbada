import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography, Stack } from '@mui/material';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <Stack direction="row" spacing={1}>
        <FormLabel sx={{ fontWeight : 'bold', fontSize : 18 }}id="radio-button" >&lt;캠핑 소통&gt;</FormLabel>
        <Typography sx={{ fontSize : 13}}>캠핑장을 선택해주세요.</Typography>
      </Stack>
      <RadioGroup
        row
        aria-labelledby="radio-button"
        name="radio-button-group"
      >
        <FormControlLabel value="share" control={<Radio />} label="나눔" />
        <FormControlLabel value="deal" control={<Radio />} label="거래" />
        <FormControlLabel value="review" control={<Radio />} label="후기" />
        <FormControlLabel value="free" control={<Radio />} label="자유" />
      </RadioGroup>
    </FormControl>
  );
}